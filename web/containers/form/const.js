/**
 * Created by wdd on 2016/11/23.
 */
export const formDefaultStyle = [{
    borderColor:'red',
    borderSize:1,
    fontColor:'red',
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
    string += "</div></html>"

    return string;
}