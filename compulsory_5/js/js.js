let div = document.getElementById("container");
let get_text = document.getElementById("text");
let lin = document.getElementById("lin");
let rin = document.getElementById("rin");
let lout = document.getElementById("lout");
let rout = document.getElementById("rout");
let is_number = /^\d+(\.\d+)?$/;//非负浮点数
let user_arr = [];
let max_height = 200;//container的高度
let sort = document.getElementById("sort");
let random = document.getElementById("random");
function judgeNumber() {
    let text = get_text.value;
    if (is_number.test(text) && text >= 10 && text <= 100) {
        user_arr.push(text);
        let get_height = text;
        return get_height;
    }
    else {
        alert("请输入10-100之间的数字");
    }
}
function draw(new_div, height) {
    new_div.setAttribute("class", "block");
    new_div.style.setProperty("--height", `${height}px`);//用变量动态设置css中的属性
    new_div.setAttribute("title", height);
}
function lin_func() {
    let height = judgeNumber();
    if (typeof height == "string") {
        let new_div = document.createElement("div");
        if (div.children.length > 0) {
            div.insertBefore(new_div, div.firstChild);
            draw(new_div, height);
        }
        else {
            div.appendChild(new_div);
            draw(new_div, height);
        }
    }
    else {
        return;
    }
}
function rin_func() {
    let height = judgeNumber();
    if (typeof height == "string") {
        let new_div = document.createElement("div");
        if (div.children.length > 0) {
            div.appendChild(new_div);
            draw(new_div, height);
        }
        else {
            div.appendChild(new_div);
            draw(new_div, height);
        }
    }
    else {
        return;
    }
}
function lout_func() {
    if (div.children.length == 0) {
        alert("已经没有小矩形辣");
    }
    console.log(div.childNodes);
    let deleted_node = div.removeChild(div.firstChild);
    alert(deleted_node.getAttribute("title"));
}
function rout_func() {
    if (div.children.length == 0) {
        alert("已经没有小矩形辣");
    }
    console.log(div.childNodes);
    let deleted_node = div.removeChild(div.lastChild);
    alert(deleted_node.getAttribute("title"));
}
function sort_arr() {
    if (user_arr.length == 0) {
        alert("还没有需要排序的矩形呢");
        return;
    }
    else {
        for (let i = 0; i < user_arr.length - 1; i++) {
            let flag = true;
            for (let j = 0; j < user_arr.length - 1 - i; j++) {
                setInterval(function () {
                    if (user_arr[j] > user_arr[j + 1]) {
                        let res = user_arr[j];
                        user_arr[j] = user_arr[j + 1];
                        user_arr[j + 1] = res;
                        flag = false;
                        //重新绘图
                        removeAllChild();
                        for (let i = 0; i < user_arr.length; i++) {
                            let res = user_arr[i];
                            let new_div = document.createElement("div");
                            div.appendChild(new_div);
                            draw(new_div, res);
                        }
                    }
                }, 50 * j);//时间延迟一定要分别延迟计算时间       每次执行函数体，setInterval中的函数就添加一次到任务队列中，等到外层循环执行完后（主线程），再一个一个执行任务队列中的任务
            }
            if (flag) {
                break;
            }
        }
    }
}
function create_random() {
    if (user_arr.length == 0) {
        let max = 100;
        let min = 10;
        for (let i = 0; i < 50; i++) {
            let res = Math.floor(Math.random() * (max - min) + min);
            user_arr.push(res);
            let new_div = document.createElement("div");
            div.appendChild(new_div);
            draw(new_div, res);
        }
    }
    else {
        user_arr.length = 0;
        removeAllChild();
        create_random();
    }
}
function removeAllChild() {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}

lin.addEventListener("click", lin_func, false);
rin.addEventListener("click", rin_func, false);
lout.addEventListener("click", lout_func, false);
rout.addEventListener("click", rout_func, false);
sort.addEventListener("click", sort_arr, false);
random.addEventListener("click", create_random, false);