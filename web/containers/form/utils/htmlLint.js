/**
 * Created by wdd on 2016/12/25.
 */
import {getStrRepeat} from '../../../utils/compatibaleApi'

export function getTableHtml(tableString,recoverData){
    let string = "<html> <head> <title>表单</title> <style>div {font-size:12px}table {border-spacing:0;border-collapse:collapse;margin:0 auto} input[type='text']:disabled {background-color:#FFF} textarea:disabled{background:#FFF} input[type='text'] {border:0;border-bottom:1px #cccccc dotted} input[type='checkbox']{margin:0;padding: 0;} input[type='radio']{margin:0;padding: 0;} body{margin:0} </style> <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"> </head> <body> <div class=\"warp\" style=\"display: block\">";
    string += tableString;
    string += "<INPUT type='hidden' id='instanceId' name='instanceId' value=''><INPUT type='hidden' id='formId' name='formId' value=''><INPUT type='hidden' id='workFlowId' name='workFlowId' value=''><INPUT type='hidden' id='processId' name='processId' value=''></div> </body> <div class='recoverData' style='display: none'>";
    string += recoverData;
    string += "</div></html>";
    return htmlLint(string);
}

export function htmlLint2(htmlString){
    let tempStr = htmlString.replace(/aria-toreplace/g,'');
    let tagArr = tempStr.match(/<\/?[^>]+>/g);
    let resultArr = [],index=0;
    let isInTd = false;
    let isInOption = false;
    let isLastAdd = false;
    let grade = 0;
    let resultHtml = "";
    for(let i=0;i<tagArr.length;i++){
        let index2 = tempStr.indexOf(tagArr[i],index);
        if(index < index2){
            let content = tempStr.substr(index,index2-index);
            if(/\S+/.test(content)){
                resultArr.push(content);
            }
        }
        if (!/<!--.+-->/.test(tagArr[i]) && !/<\/textarea>/.test(tagArr[i])) {
            resultArr.push(tagArr[i]);
        }
        index = index2 + tagArr[i].length;
    }
    for(let i = 0;i<resultArr.length;i++){
        if(/<td/.test(resultArr[i])){
            isInTd=true;
        }
        else if(/<\/td/.test(resultArr[i])){
            isInTd =false;
        }
        if(/<option/.test(resultArr[i])){
            isInOption = true;
        } else if(/<\/option/.test(resultArr[i])) {
            isInOption = false;
        }
        if(/<[^\/]+>/.test(resultArr[i])){
            if(/<meta.+>/.test(resultArr[i])){
                isLastAdd = false;
            } else if(/<input.+>/.test(resultArr[i]) || /<textarea.+/.test(resultArr[i])){
                grade = isLastAdd ? grade+1:grade;
                isLastAdd = false;
            } else {
                grade = isLastAdd ? grade + 1 : grade;
                isLastAdd = true;
            }
        }
        else if(/<\/.+>/.test(resultArr[i])){
            grade = !isLastAdd ? grade-1 : grade;
            isLastAdd = false;
        }
        let isTd = resultArr[i].indexOf('<td') >= 0;
        let extraStrToAdd = '\r\n'+getStrRepeat('\t',grade);
        let beforeIsTd = resultArr[i-1] && resultArr[i-1].indexOf('<td') >= 0;
        if(isInTd && !isTd){
            let isInput = resultArr[i].indexOf('<input') >= 0;
            let isTextArea = resultArr[i].indexOf('<textarea') >= 0;
            let beforeIsInput = resultArr[i-1] && resultArr[i-1].indexOf('<input') >= 0;
            let beforeIsTextArea = resultArr[i-1] && resultArr[i-1].indexOf('<textarea') >= 0;
            let isSection = resultArr[i].indexOf('<select') >= 0;
            let isSectionEnd = resultArr[i].indexOf('</select') >= 0;
            let afterIsTd = resultArr[i+1] && resultArr[i+1].indexOf('</td') >= 0;
            let isPureContent= !/<\/?[^>]+>/.test(resultArr[i]);
            if(beforeIsInput || beforeIsTextArea){
                if(isPureContent){
                    resultHtml += (resultArr[i]+(beforeIsInput?'</input>':'</textarea>')+(afterIsTd?'':'<!--'))
                } else {
                    resultHtml += ((beforeIsInput?'</input>':'</textarea>')+'<!--');
                    resultHtml += (extraStrToAdd+'-->'+resultArr[i]+(afterIsTd?'</textarea>':'<!--'));
                }
            } else if(isSection || isInput || isTextArea) {
                resultHtml += (extraStrToAdd+(beforeIsTd ? '':'-->')+resultArr[i]);
                if(afterIsTd && (isInput || isTextArea)){
                    resultHtml+=(isInput ? '</input>':'</textarea>')
                }
            } else if(isSectionEnd){
                resultHtml += (extraStrToAdd+resultArr[i]+(afterIsTd?'':'<!--'))
            } else if(isPureContent && !isInOption){
                resultHtml += (extraStrToAdd+(beforeIsTd?'':'-->')+resultArr[i]+(afterIsTd?'':'<!--'))
            } else {
                resultHtml += (extraStrToAdd+resultArr[i]);
            }
        } else {
            resultHtml += (extraStrToAdd+resultArr[i]);
        }
    }
    return resultHtml;
}

export function htmlLint(htmlString){
    let tempStr = htmlString;
    tempStr = tempStr.replace(/aria-toreplace/g,'');
    let arr = tempStr.match(/<\/?[^>]+>/g);
    let arr2 = [];
    let index = 0;
    let reg1 = new RegExp(/<\/.+>/);
    let reg2 = new RegExp(/\S+/);
    let reg3 = new RegExp(/<[^\/]+>/);
    let reg4 = new RegExp(/<!--.+-->/);
    let reg5 = new RegExp(/<meta.+>/);
    let reg6 = new RegExp(/<input.+>/);
    let reg7 = new RegExp(/<\/textarea>/);
    let hasBr = false;
    for(let i=0;i<arr.length;i++){
        let index2 = tempStr.indexOf(arr[i],index);
        if(index < index2){
            let str = tempStr.substr(index,index2-index);
            if(reg2.test(str) && !reg4.test(str)) {
                arr2.push(str);
            }
        }
        if(!reg4.test(arr[i])) {
            arr2.push(arr[i]);
        }
        index = index2 + arr[i].length;
    }
    let resultStr = '';
    let grade = 0;
    let isLastAdd = false;
    for(let i=0;i<arr2.length;i++){
        if(reg5.test(arr2[i])){
            isLastAdd = false;
        } else if(reg6.test(arr2[i]) || arr2[i].indexOf('<INPUT') >= 0 || arr2[i] == '<br>'){
            if(isLastAdd) {
                grade++;
            }
            isLastAdd = false;
        } else if(reg1.test(arr2[i])){
            grade = isLastAdd ? grade : grade-1;
            isLastAdd = false;
        } else if(reg3.test(arr2[i])){
            grade = isLastAdd ? grade+1 : grade;
            isLastAdd = true;
        }
        if(i > 0 && arr2[i-1] && arr2[i+1]){
            if(arr2[i-1].indexOf("<textarea") >= 0 && arr2[i+1].indexOf("</textarea") >= 0){
                resultStr += arr2[i];
                continue;
            }
        }
        if(reg7.test(arr2[i])){
            resultStr += arr2[i];
        } else {
            if(arr2[i-1] && (arr2[i-1].indexOf('<input type="radio"') >= 0  || arr2[i-1].indexOf('<input type="checkbox"') >= 0)){
                resultStr += (arr2[i]+'</input>')
            } else {
                resultStr += '\r\n' + getTab(grade) + arr2[i];
            }
        }
    }
    function getTab(num){
        let str = '';
        for(let i=0;i<num;i++){
            str += '\t';
        }
        return str;
    }
    return resultStr;
}