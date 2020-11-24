let insert_btn = document.getElementById("insert");
let search_btn = document.getElementById("search");
let input_text = document.getElementById("user_input");
let search_text = document.getElementById("search_text");
let container = document.getElementById("container");
let user_arr = [];
let checked_arr = [];//找到的元素的数组索引
let jugement = /[`~!@#$%^*()\n\r_+?:{},.\/\\;[\]]/;//匹配特殊字符

function insert() {
    let text = input_text.value;
    if (!text) {
        alert("请输入内容");
        return;
    }
    let new_div = document.createElement("div");
    new_div.setAttribute("id", "new_div");
    let new_span = document.createElement("span");
    new_span.innerHTML = text;
    new_div.appendChild(new_span);
    container.appendChild(new_div);
    user_arr.push(text);
}
function search() {
    let text = search_text.value;
    if (!text) {
        alert("请输入要查询的内容");
    }
    //每次调用查询清空所有span的id值
    for (let index of checked_arr) {
        container.childNodes[index].firstChild.setAttribute("id", "#");
    }
    //每次重新调用查询清空checked_arr(注意与上一步的顺序，不能反)
    checked_arr.length = 0;
    //查询目标元素
    for (let i = 0; i < user_arr.length; i++) {
        if (user_arr[i].includes(text)) {
            checked_arr.push(i);
        }
    }
    //修改目标元素的span的id为checked
    for (let index of checked_arr) {
        container.childNodes[index].firstChild.setAttribute("id", "checked");
    }
}
function multiInsert(text) {
    splited_str = text.split(jugement);
    for (let i = 0; i < splited_str.length; i++) {
        MultiInsert(splited_str[i]);
    }
}
function MultiInsert(newtext) {
    let text = newtext;
    if (!text) {
        alert("请输入内容");
        return;
    }
    let new_div = document.createElement("div");
    new_div.setAttribute("id", "new_div");
    let new_span = document.createElement("span");
    new_span.innerHTML = text;
    new_div.appendChild(new_span);
    container.appendChild(new_div);
    user_arr.push(text);
}
function juge() {
    if (jugement.test(input_text.value)) {
        let text = input_text.value;
        multiInsert(text);
    }
    else {
        insert();
    }
}

insert_btn.addEventListener("click", juge, false);
search_btn.addEventListener("click", search, false);