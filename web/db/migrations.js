/**
 * Created by wdd on 2016/12/27.
 */

export default [
    /**
     * 注意一次数据库的数据结构定义好之发布后, 如果有改动新建版本做修改
     * 绝对不要修改历史版本的数据结构!
     */
    {
        ver:1,
        stores: {
            style:[
                'id',
                'content',
                'borderColor',
                'borderSize',
                'color',
                'fontSize',
                'fontFamily',
                'isDefault',
                'name',
                'id',
                'fontStyleArray',
                'textAlign',
                'verticalAlign'
            ],
            tempModule:[
                'id',
                'data'
            ]
        }
    }
]
