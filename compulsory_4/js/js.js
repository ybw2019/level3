let div = document.getElementById("container");
let get_text = document.getElementById("text");
let lin = document.getElementById("lin");
let rin = document.getElementById("rin");
let lout = document.getElementById("lout");
let rout = document.getElementById("rout");

function lin_func() {
    let text = get_text.value;
    let new_div = document.createElement("div");
    new_div.setAttribute("class", "newDiv");
    let new_textnode = document.createTextNode(text);
    new_div.appendChild(new_textnode);
    if (div.children.length > 0) {
        div.insertBefore(new_div, div.childNodes[0]);
    }
    else {
        div.appendChild(new_div);
    }
}
function rin_func() {
    let text = get_text.value;
    let new_div = document.createElement("div");
    new_div.setAttribute("class", "newDiv");
    let new_textnode = document.createTextNode(text);
    new_div.appendChild(new_textnode);
    if (div.children.length > 0) {
        div.appendChild(new_div);
    }
    else {
        div.appendChild(new_div);
    }
}
function lout_func() {
    if (div.children.length == 0) {
        alert("已经没有小方块辣");
    }
    console.log(div.childNodes);
    let deleted_node = div.removeChild(div.firstChild);//注意此时不能在container中加入注释，否则会多出三个子节点，而要被删除的就在第四个位置了。若要加注释在应该用div.childNodes[3]来获取被删除的元素
    alert(deleted_node.innerHTML);
}
function rout_func() {
    if (div.children.length == 0) {
        alert("已经没有小方块辣");
    }
    let deleted_node = div.removeChild(div.lastChild);
    alert(deleted_node.innerHTML);
}
lin.addEventListener("click", lin_func, false);
rin.addEventListener("click", rin_func, false);
lout.addEventListener("click", lout_func, false);
rout.addEventListener("click", rout_func, false);