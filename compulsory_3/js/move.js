var aqiData = {};

//清除用户输入数据
function clear() {
    document.getElementById("aqi-city-input").value = "";
    document.getElementById("aqi-value-input").value = "";
}

function addAqiData() {
    //获取数据
    let cityName = document.getElementById("aqi-city-input").value.trim();
    let quality = document.getElementById("aqi-value-input").value.trim();
    //验证数据并添加
    if (!cityName.match(/^[A-Za-z\u4E00-\u9FA5]+$/)) {
        alert("城市名必须是中文或者英文");
        clear();
        return;
    }
    if (!quality.match(/^\d+$/)) {
        alert("空气质量必须是整数数字");
        clear();
        return;
    }
    aqiData[cityName] = quality; //element.property=value;其中的property是创建时的值，不能用变量（否则会是变量名），而[]可以
}

function renderAqiList() {
    //抹除上一次的显示
    let parent = document.getElementById("aqi-table");
    let son = parent.getElementsByTagName("tr");
    for (let i = 1; i < son.length; i++) {
        son[i].classList.add("del");
    }
    //本次显示
    let newTr = document.createElement("tr");
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");
    let newTd3 = document.createElement("td");
    for (var city in aqiData) {
        //创建表头
        if (parent.children.length == 0) {
            parent.appendChild(newTr);

            newTr.appendChild(newTd1);
            let text1 = document.createTextNode("城市");
            newTd1.appendChild(text1);

            let text2 = document.createTextNode("空气质量")
            newTd2.appendChild(text2);
            newTr.appendChild(newTd2);

            let text3 = document.createTextNode("操作")
            newTd3.appendChild(text3);
            newTr.appendChild(newTd3);
        }
        //追加新行
        let newTr2 = document.createElement("tr");

        let td1 = document.createElement("td");
        let text4 = document.createTextNode(city);
        td1.appendChild(text4);
        newTr2.appendChild(td1);

        let td2 = document.createElement("td");
        let text5 = document.createTextNode(aqiData[city]);
        td2.appendChild(text5);
        newTr2.appendChild(td2);

        let td3 = document.createElement("td");
        let btn = document.createElement("button");
        td3.appendChild(btn);
        let text6 = document.createTextNode("删除");
        btn.appendChild(text6);
        newTr2.appendChild(td3);

        parent.appendChild(newTr2);

    }
    init();
}

function addBtnHandle() {
    addAqiData();
    renderAqiList();
    return false;
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(there) {
    //给删除按钮的父元素（tr）添加del类
    // let father = there.parentNode;
    // let grandpa = father.parentNode;
    // grandpa.classList.add("del");

    //从aqiData中将其删除
    let target = there.parentNode.parentNode; //找到当前tr
    let delCity = target.children[0].innerHTML; //找到当前tr的属性
    delete aqiData[delCity];
    renderAqiList();
}

function init() {
    let add = document.getElementById("add-btn");
    add.onclick = function () {
        addBtnHandle();
    }
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    let table = document.getElementById("aqi-table");
    let buttons = table.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            let there = this; //此时this指向触发dom事件的元素，即buttons[i]
            delBtnHandle(there);
        }
    }
}
init();