/**
 * Created by wdd on 2016/11/23.
 */
export const formDefaultStyle = [{
    borderColor:'#FF0000',
    borderSize:1,
    color:'#FF0000',
    fontSize:20,
    fontFamily:'SimSun',
    isDefault:true,
    name:'样式一',
    id:1,
    fontStyleArray:[false,false],
    textAlign:'center'
}];

export const fontFamilyList = [
    {value:'SimHei',text:'黑体'},
    {value:'SimSun',text:'宋体'},
    {value:'NSimSun',text:'新宋体'},
    {value:'FangSong',text:'仿宋'},
    {value:'KaiTi',text:'楷体'},
    {value:'FangSong_GB2312',text:'仿宋_GB2312'},
    {value:'KaiTi_GB2312',text:'楷体_GB2312'},
    {value:'Microsoft YaHei',text:'微软雅黑体'},
];

export const textAlignPosition = [
    {value:'center',text:'center'},
    {value:'right',text:'right'},
    {value:'left',text:'left'}
];

export const fontWeightValues = [
    {value:'normal',text:'normal'},
    {value:'bolder',text:'bolder'}
];

export const showBorderArray = [
    '上','下','左','右'
];

export const fontStyleArray= [
    '加粗','斜体'
];

export const editElement = 'element';
export const editDisplay = 'display';
export const editPreview = 'preview';
export const editSource = 'source';

export const toolEdit = 'edit';
export const toolTool = 'tool';
export const toolStyle = 'style';

export const styleViewAdd = 'viewAdd';
export const styleViewModify = 'viewModify';

export const componentText = 'text';
export const componentInput = 'input';
export const componentTextArea = 'textArea';
export const componentDropBox = 'dropBox';
export const componentTd = 'td';

export const editorNumberPicker = 'numberPicker';
export const editorNumberSetter = 'numberSetter';
export const editorColorPicker = 'colorPicker';
export const editorDropBoxPicker = 'dropBoxPicker';
export const editorCheckBoxPicker = 'checkBoxPicker';
export const editorTextPicker = 'textPicker';
export const editorOptionPicker = 'optionSetter';

export function getTableHtml(tableString,recoverData){
    let string = "<html> <head> <title>表单元素说明</title> <style>div {font-size:12px}table {border-spacing:0;border-collapse:collapse;margin:0 auto}input[type='text'] {border:0;border-bottom:1px #cccccc dotted}</style> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"> </head> <body> <div class=\"warp\" style=\"display: block\">";
    string += tableString;
    string += "</div> </body> <div class='recoverData' style='display: none'>";
    string += recoverData;
    string += "</div></html>";
    return string;
}

export const tableModuleArray = [
    {
        "header": {
            "styleId": 1,
            "title": "江苏省环保厅拟文稿纸",
            "style": {"textAlign": "center", "height": "66", "fontSize": 32, "fontStyleArray": [true, false]}
        },
        "tds": [[{
            "components": [],
            "id": 0,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 0,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "编  号"
        }, {
            "components": [{
                "tdId": 1,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 1,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 0,
                "cCol": 4,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 2,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {"x": 2, "y": 0, "cCol": 1, "tCol": 7, "cRow": 1, "tRow": 12, "tWidth": 820, "tHeight": 962},
            "value": ""
        }, {
            "components": [],
            "id": 3,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {"x": 3, "y": 0, "cCol": 1, "tCol": 7, "cRow": 1, "tRow": 12, "tWidth": 820, "tHeight": 962},
            "value": ""
        }, {
            "components": [],
            "id": 4,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {"x": 4, "y": 0, "cCol": 1, "tCol": 7, "cRow": 1, "tRow": 12, "tWidth": 820, "tHeight": 962},
            "value": ""
        }, {
            "components": [],
            "id": 5,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 0,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "保管期限"
        }, {
            "components": [{
                "tdId": 6,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 6,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 6,
                "y": 0,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 7,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "密  级"
        }, {
            "components": [{
                "tdId": 8,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 8,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 1,
                "cCol": 4,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 9,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 10,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 11,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 12,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "紧急程度"
        }, {
            "components": [{
                "tdId": 13,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 13,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 6,
                "y": 1,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 14,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "标  题"
        }, {
            "components": [{
                "tdId": 15,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "600",
                    "height": 55,
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 15,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 2,
                "cCol": 6,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 16,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 17,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 18,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 19,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 20,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 2,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 21,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "主  送"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 22,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 3,
                "cCol": 6,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 23,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 24,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 25,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 26,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 27,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 3,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 28,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "抄  送"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 29,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 4,
                "cCol": 6,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 30,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 31,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 32,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 33,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 34,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 4,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 35,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 5,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "拟稿单位"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 36,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 5,
                "cCol": 3,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 37,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 5,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 38,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 5,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 39,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 5,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "打印份数"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 40,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 5,
                "y": 5,
                "cCol": 2,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 41,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 5,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 42,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 6,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "拟 稿 人"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 43,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 6,
                "cCol": 3,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 44,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 6,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 45,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 6,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 46,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 6,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "校对人"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 47,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 5,
                "y": 6,
                "cCol": 2,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 48,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 6,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 49,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 2,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "政务公开专栏"
        }, {
            "components": [],
            "id": 50,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "网上公开"
        }, {
            "components": [{
                "tdId": 51,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 51,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 7,
                "cCol": 5,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 52,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 53,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 54,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 55,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 7,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 56,
            "mockType": 2,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 57,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "规范性文件"
        }, {
            "components": [{
                "tdId": 58,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 58,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "left"},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 8,
                "cCol": 5,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 59,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 60,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 61,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 62,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 8,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 63,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "180", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 9,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "处室核稿"
        }, {
            "components": [],
            "id": 64,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 9,
                "cCol": 3,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 65,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 9,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 66,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 9,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 67,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 9,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "处室会办"
        }, {
            "components": [],
            "id": 68,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 9,
                "cCol": 2,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 69,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 9,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 70,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "180", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 10,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "厅办秘书核稿"
        }, {
            "components": [],
            "id": 71,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 10,
                "cCol": 3,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 72,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 10,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 73,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 10,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 74,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 10,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "厅办主任核稿"
        }, {
            "components": [],
            "id": 75,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 10,
                "cCol": 2,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 76,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 10,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 77,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "180", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 11,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "分管领导核稿"
        }, {
            "components": [],
            "id": 78,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 11,
                "cCol": 3,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 79,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 11,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 80,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 11,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 81,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 11,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "签  发"
        }, {
            "components": [],
            "id": 82,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 11,
                "cCol": 2,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 83,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 11,
                "cCol": 1,
                "tCol": 7,
                "cRow": 1,
                "tRow": 12,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }]],
        "id": 84,
        "styleId": 1,
        "posInfo": {"row": 12, "col": 7, "width": 820, "height": 962},
        "currentStyleId": 1,
        "formStyleMaxId": 1,
        "formStyleList": [{
            "name": "样式一",
            "borderColor": "#FF0000",
            "textAlign": "center",
            "borderSize": 1,
            "color": "#FF0000",
            "fontFamily": "SimSun",
            "fontStyleArray": [true, false],
            "fontSize": 20,
            "isDefault": true,
            "id": 1
        }]
    },
    {
        "header": {
            "styleId": 1,
            "title": "南京市玄武区人民政府办公室办文单",
            "style": {"textAlign": "center", "height": "66", "fontSize": 36, "fontStyleArray": [false, false]}
        },
        "tds": [[{
            "components": [],
            "id": 0,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 1,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 2,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 3,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 1,
            "posInfo": {
                "x": 3,
                "y": 0,
                "cCol": 2,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 4,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {"x": 4, "y": 0, "cCol": 1, "tCol": 8, "cRow": 1, "tRow": 8, "tWidth": 820, "tHeight": 962},
            "value": ""
        }, {
            "components": [],
            "id": 5,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 6,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 7,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 0,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 8,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 9,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 10,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 11,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 12,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 1,
                "cCol": 2,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 13,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 14,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 15,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 1,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 16,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "来文单位"
        }, {
            "components": [{
                "tdId": 17,
                "id": 2,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "180",
                    "height": 55,
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 17,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 3,
            "posInfo": {
                "x": 1,
                "y": 2,
                "cCol": 2,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 18,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 19,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "文号"
        }, {
            "components": [{
                "tdId": 20,
                "id": 1,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "180",
                    "height": 55,
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 20,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 2,
            "posInfo": {
                "x": 4,
                "y": 2,
                "cCol": 2,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 21,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 22,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "密级"
        }, {
            "components": [{
                "tdId": 23,
                "id": 0,
                "type": "dropBox",
                "style": {"dataArray": ["右击编辑内容"], "width": 80, "height": 42},
                "styleId": 1
            }],
            "id": 23,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 7,
                "y": 2,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 24,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "60", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "文件标题"
        }, {
            "components": [{
                "tdId": 25,
                "id": 1,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "690",
                    "height": "60",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 25,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 2,
            "posInfo": {
                "x": 1,
                "y": 3,
                "cCol": 7,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 26,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 27,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 28,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 29,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 30,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 31,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 3,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 32,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "180", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "拟办"
        }, {
            "components": [],
            "id": 33,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 4,
                "cCol": 7,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 34,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 35,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 36,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 37,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 38,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 39,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 4,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 40,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "200", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "领导签批"
        }, {
            "components": [],
            "id": 41,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 5,
                "cCol": 7,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 42,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 43,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 44,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 45,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 46,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 47,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 5,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 48,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "200", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "办理情况"
        }, {
            "components": [],
            "id": 49,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 6,
                "cCol": 7,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 50,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 51,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 52,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 53,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 54,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 55,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 6,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 56,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "100", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "备注"
        }, {
            "components": [{
                "tdId": 57,
                "id": 1,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "690",
                    "height": "100",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 57,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 2,
            "posInfo": {
                "x": 1,
                "y": 7,
                "cCol": 7,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 58,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 59,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 60,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 61,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 62,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 6,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 63,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 7,
                "y": 7,
                "cCol": 1,
                "tCol": 8,
                "cRow": 1,
                "tRow": 8,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }]],
        "id": 64,
        "styleId": 1,
        "posInfo": {"row": 8, "col": 8, "width": 820, "height": 962},
        "currentStyleId": 1,
        "formStyleMaxId": 1,
        "formStyleList": [{
            "name": "样式一",
            "borderColor": "#000000",
            "textAlign": "center",
            "borderSize": 1,
            "color": "#000000",
            "fontFamily": "SimSun",
            "fontStyleArray": [true, false],
            "fontSize": 24,
            "isDefault": true,
            "id": 1
        }]
    },
    {
        "header": {
            "styleId": 1,
            "title": "中共玄武区委文件传阅单",
            "style": {"textAlign": "center", "height": "66", "fontSize": 38, "fontStyleArray": [true, false]}
        },
        "tds": [[{
            "components": [],
            "id": 0,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 1,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 2,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false], "width": "200"},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 0,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 3,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {"x": 3, "y": 0, "cCol": 1, "tCol": 6, "cRow": 1, "tRow": 15, "tWidth": 820, "tHeight": 962},
            "value": ""
        }, {
            "components": [],
            "id": 4,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 5,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 6,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 1,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "姓    名"
        }, {
            "components": [],
            "id": 7,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 8,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 1,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "送阅日期"
        }, {
            "components": [],
            "id": 9,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 10,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 1,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "退回日期"
        }, {
            "components": [],
            "id": 11,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 12,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 2,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "徐曙海"
        }, {
            "components": [],
            "id": 13,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 14,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 2,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 15,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 16,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 2,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 17,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 18,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 3,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "穆耕林"
        }, {
            "components": [],
            "id": 19,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 20,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 3,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 21,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 22,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 3,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 23,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 24,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 4,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "杨乐华"
        }, {
            "components": [],
            "id": 25,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 26,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 4,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 27,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 28,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 4,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 29,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 30,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 5,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "易 兵"
        }, {
            "components": [],
            "id": 31,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 32,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 5,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 33,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 34,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 5,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 35,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 36,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 6,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "许 恺"
        }, {
            "components": [],
            "id": 37,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 38,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 6,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 39,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 40,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 6,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 41,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 42,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 7,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "滕 涛"
        }, {
            "components": [],
            "id": 43,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 44,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 7,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 45,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 46,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 7,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 47,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 48,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 8,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "张 望"
        }, {
            "components": [],
            "id": 49,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 50,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 8,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 51,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 52,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 8,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 53,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 54,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 9,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "毛银玲"
        }, {
            "components": [],
            "id": 55,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 9,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 56,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 9,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 57,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 9,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 58,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 9,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 59,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 9,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 60,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 10,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "陈乙华"
        }, {
            "components": [],
            "id": 61,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 10,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 62,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 10,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 63,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 10,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 64,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 10,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 65,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 10,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 66,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 11,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "张惠民"
        }, {
            "components": [],
            "id": 67,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 11,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 68,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 11,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 69,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 11,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 70,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 11,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 71,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 11,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 72,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 12,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "朱天龙"
        }, {
            "components": [],
            "id": 73,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 12,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 74,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 12,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 75,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 12,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 76,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 12,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 77,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 12,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 78,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 13,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "顾学椋"
        }, {
            "components": [],
            "id": 79,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 13,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 80,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 2,
                "y": 13,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 81,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 13,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "250", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 82,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 13,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 83,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 13,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 84,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "310", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 14,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "批示"
        }, {
            "components": [],
            "id": 85,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 14,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 86,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 14,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 87,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 14,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 88,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 14,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 89,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 14,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 15,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }]],
        "id": 90,
        "styleId": 1,
        "posInfo": {"row": 15, "col": 6, "width": 820, "height": 962},
        "currentStyleId": 1,
        "formStyleMaxId": 1,
        "formStyleList": [{
            "name": "样式一",
            "borderColor": "#000000",
            "textAlign": "center",
            "borderSize": 1,
            "color": "#000000",
            "fontFamily": "SimSun",
            "fontStyleArray": [false, false],
            "fontSize": 30,
            "isDefault": true,
            "id": 1
        }]
    },
    {
        "header": {
            "styleId": 1,
            "title": "会议室申请",
            "style": {"textAlign": "center", "height": "66", "fontSize": 25, "fontStyleArray": [true, false]}
        },
        "tds": [[{
            "components": [],
            "id": 0,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 1,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 1,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 2,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 3,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "申 办 时 间"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": 120, "height": 25.33},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 4,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 5,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [false, false, false, false]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 0,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 6,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "申 办 单 位"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "240", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 7,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true], "textAlign": "center"},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 1,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 8,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 9,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 1,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "规 模 人 数"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "240", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 10,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 1,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 11,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {"x": 5, "y": 1, "cCol": 1, "tCol": 6, "cRow": 1, "tRow": 9, "tWidth": 820, "tHeight": 962},
            "value": ""
        }], [{
            "components": [],
            "id": 12,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "会 议 名 称"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "650", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 13,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 2,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 14,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 15,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 16,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 17,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 2,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 18,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "会 议 时 间"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "240", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 19,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 3,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 20,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 21,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "开 会 地 点"
        }, {
            "components": [{
                "id": 0,
                "type": "input",
                "style": {"width": "240", "height": 25.33, "marginTop": 0, "marginLeft": 0},
                "styleId": 1,
                "value": "点击编辑内容"
            }],
            "id": 22,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 4,
                "y": 3,
                "cCol": 2,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 23,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 3,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 24,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "190", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "参 加 对 象"
        }, {
            "components": [{
                "tdId": 25,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "650",
                    "height": "170",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 25,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 4,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 26,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 27,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 28,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 29,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 4,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 30,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "190", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "主 要 议 程"
        }, {
            "components": [{
                "tdId": 31,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "650",
                    "height": "170",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 31,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 5,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 32,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 33,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 34,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 35,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 5,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 36,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "190", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "办公室拟办意见"
        }, {
            "components": [{
                "tdId": 37,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "650",
                    "height": "170",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 37,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 6,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 38,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 39,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 40,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 41,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 6,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 42,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "190", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "区分管常委意见"
        }, {
            "components": [{
                "tdId": 43,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "650",
                    "height": "170",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 43,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 7,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 44,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 45,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 46,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 47,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 7,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }], [{
            "components": [],
            "id": 48,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": "190", "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 0,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": "备  注"
        }, {
            "components": [{
                "tdId": 49,
                "id": 0,
                "type": "textArea",
                "style": {
                    "fontStyleArray": [false, false],
                    "width": "650",
                    "height": "170",
                    "marginTop": 0,
                    "marginLeft": 0
                },
                "styleId": 1,
                "value": ""
            }],
            "id": 49,
            "mockType": 0,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 1,
            "posInfo": {
                "x": 1,
                "y": 8,
                "cCol": 5,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 50,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 2,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 51,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 3,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 52,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 4,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }, {
            "components": [],
            "id": 53,
            "mockType": 1,
            "styleId": 1,
            "style": {"height": 60, "showBorder": [true, true, true, true]},
            "componentId": 0,
            "posInfo": {
                "x": 5,
                "y": 8,
                "cCol": 1,
                "tCol": 6,
                "cRow": 1,
                "tRow": 9,
                "tWidth": 820,
                "tHeight": 962,
                "cRowFix": false
            },
            "value": ""
        }]],
        "id": 54,
        "styleId": 1,
        "posInfo": {"row": 9, "col": 6, "width": 820, "height": 962},
        "currentStyleId": 1,
        "formStyleMaxId": 1,
        "formStyleList": [{
            "name": "样式一",
            "borderColor": "#000000",
            "textAlign": "center",
            "borderSize": 1,
            "color": "#000000",
            "fontFamily": "SimSun",
            "fontStyleArray": [false, false],
            "fontSize": 18,
            "isDefault": true,
            "id": 1
        }]
    }
]