function select() {
    if (!document.getElementById || !document.getElementById("aqi-list")) {
        return false;
    }
    if (!document.createElement || !document.createElement("li")) {
        return false;
    }

    var aqiData = [
        ["北京", 90],
        ["上海", 50],
        ["福州", 10],
        ["广州", 50],
        ["成都", 80],
        ["西安", 100]
    ];
    var num = ['一', '二', '三', '四', '五'];
    var city = 0;
    var selected_city = [];

    for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] >= 60) {
            selected_city[city] = aqiData[i];
            city++;
        }
    }
    selected_city.sort(function (a, b) {
        return b[1] - a[1];
    })
    for (var k = 0; k < selected_city.length; k++) {
        var getData = document.getElementById("aqi-list");
        var newLi = document.createElement("li");
        getData.appendChild(newLi);
        newLi.innerHTML = '第' + num[k] + '名 :' + selected_city[k];
    }
}

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

function init() {
    addLoadEvent(select()); //必须调用一次函数，否则该传参无意义
}