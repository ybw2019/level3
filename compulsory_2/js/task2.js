//使用for循环定义一个二维数组
var cityDatas = [];
for (var i = 0; i < 7; i++) {
    cityDatas[i] = [];
    for (var j = 0; j < 1; j++) {
        cityDatas[i][j] = 0;
    }
}
//将文档中ul中的文本内容提取出来并赋值给数组
function getData() {
    if (!document.getElementById || !document.getElementById("source")) {
        return false;
    }
    if (!document.getElementsByTagName || !document.getElementsByTagName("li")) {
        return false;
    }
    var source = document.getElementById("source");
    var lis = source.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        var numLi = lis[i];
        var cityName = numLi.childNodes[0].nodeValue; //获取li中第一个子节点的值
        var data = numLi.childNodes[1].firstChild.nodeValue; //获取li中第二个子节点（b）中的第一个字节点的值
        cityDatas[i][0] = cityName;
        cityDatas[i][1] = data;
    }
    // alert(cityDatas[0][0] + cityDatas[0][1]);
}
//数组元素进行倒叙摆列
function rank(Array1) {
    Array1.sort(function (a, b) {
        return b[1] - a[1];
    })
}
//将排序后的数组元素依次插入新建的li中
function display(Array) {
    var resort = document.getElementById("resort");
    for (var i = 0; i < Array.length; i++) {
        var newLi = document.createElement("li");
        resort.appendChild(newLi);
        newLi.innerHTML = '第' + (i + 1) + '名:' + Array[i][0] + Array[i][1];
    }
}
//将函数绑定到window.onload上
function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}
function add() {
    addLoadEvent(getData());
    addLoadEvent(rank(cityDatas));
    addLoadEvent(display(cityDatas));
}
//函数调用，用于js和html文档的链接
function init() {
    add();
}