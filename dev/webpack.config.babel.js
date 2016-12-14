'use strict';

import * as DEV_CONST from './const'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack, {DefinePlugin, NoErrorsPlugin, HotModuleReplacementPlugin,} from 'webpack';

let buildDate = new Date();
let BUILD_TIME_STAMP = buildDate.getTime();
let BUILD_TIME_STR = buildDate.toString();

function headerEmbedJs(options) {
    return `
      window.__APP_NAME__ = "true.form";
      window.__VERSION__ = "0.0.1";
      window.__APP_ENV__ = "dev";
      window.__DEBUG__ = ${DEV_CONST.APP_DEBUG};
      window.__BUILD_TIME_STAMP__ = ${BUILD_TIME_STAMP};
      window.__BUILD_TIME_STR__ = "${BUILD_TIME_STR}";
      window.__ELECTRON__ = false;
      window.__LAUNCH_TIME__ = Date.now()
  `;
}

function entryConfig(options) {
    let mainConfig = [
        DEV_CONST.SRC_WEB_MAIN_FILE
    ];

    if (DEV_CONST.APP_DEBUG) {
        let devServerConfig = [
            'react-hot-loader/patch',
            `webpack-hot-middleware/client?path=http://127.0.0.1:${DEV_CONST.DEV_PORT}/__webpack_hmr`,
            `webpack/hot/only-dev-server`
        ];
        mainConfig = [
            ...devServerConfig,
            ...mainConfig
        ];
    }

    return mainConfig;
}

function outputConfig(options) {
    return {
        path: DEV_CONST.OUTPUT_WEB_DIR,
        publicPath: '',
        filename: `[name]-bundle-[[hash]].js`
    }
}

function resolveConfig(options) {
    return {
        root: [DEV_CONST.SRC_DIR],
        extensions: ['', '.js', '.css', '.json', '.styl']
    }
}

function nodeConfig(options) {
    return {
        __filename: true,
        __dirname: true,
        global: true
    }
}

function htmlWebpackPluginConfig(options) {
    function minifyConfig() {
        if (DEV_CONST.APP_DEBUG) return false;
        return {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseInlineTagWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        }
    }

    return {
        title: 'true.form',
        version: '0.0.1',
        favicon: DEV_CONST.ASSETS_ICONS_16X16_ICON,
        minify: minifyConfig(),
        headerEmbedJs: headerEmbedJs(options),
        inject: false,
        cache: false,//true,
        showErrors: true
    };
}

//--------------------------------------
export function webpackConfig(options) {
    options = options || {};
    return {
        context: DEV_CONST.SRC_DIR,
        bail: true,
        debug: DEV_CONST.APP_DEBUG,
        cache: true,
        entry: entryConfig(options),
        output: outputConfig(options),
        resolve: resolveConfig(options),
        devtool: DEV_CONST.APP_DEBUG ? 'inline-source-map' : false,
        target: 'web', //default
        node: nodeConfig(options),
        module: {
            loaders: [
                {
                    test: /\.js[x]?$/,
                    include: DEV_CONST.SRC_DIR,
                    exclude: DEV_CONST.NODE_MODULES_DIR,
                    loaders: DEV_CONST.APP_DEBUG ? ['react-hot-loader/webpack','babel'] : ['babel']
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract(['css'])
                },
                {
                    test: /\.styl$/,
                    loader: ExtractTextPlugin.extract(['css', 'stylus'])
                },
                {test: /\.html$/, loader: "html"},
                {test: /\.pug/, loader: "pug?pretty=true"},
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: `url?name=imgs/[name]-[[hash]].[ext]&limit=${DEV_CONST.EMBED_FILE_MAX_SIZE}`
                },
                {
                    test: /(\.eot|\.woff2|\.woff|\.ttf|regular\.svg)$/,
                    loader: `file?name=fonts/[name]-[[hash]].[ext]`
                },
                {
                    test: /\.json$/, loader: 'json'
                }
            ]
        },

        plugins: [
            DEV_CONST.APP_DEBUG ? new webpack.HotModuleReplacementPlugin() : null,
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),

            DEV_CONST.APP_DEBUG ? null : new webpack.optimize.UglifyJsPlugin({
                compress:{
                    warnings: false,
                    dead_code: true,
                },
                output:{
                    comments:false
                }
            }),
            new DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                    }
                }
            ),
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin(`[name]-bundle-[[contenthash]].css`, {
                allChunks: true
            }),
            new HtmlWebpackPlugin(Object.assign({
                template: DEV_CONST.SRC_WEB_HTML_MAIN_FILE,
                filename: `./${DEV_CONST.OUTPUT_WEB_HTML_MAIN_FILE}`,
                excludeChunks: DEV_CONST.SRC_WEB_HTML_BOOTUP_FILE
            }, htmlWebpackPluginConfig(options))),
        ].filter(function (item) {
            return !!item;
        })
    }
}

let defaultConfig = webpackConfig();
export default defaultConfig;