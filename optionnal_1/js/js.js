let screen = document.getElementById("display");
let btn0 = document.getElementById("n0");
let btn1 = document.getElementById("n1");
let btn2 = document.getElementById("n2");
let btn3 = document.getElementById("n3");
let btn4 = document.getElementById("n4");
let btn5 = document.getElementById("n5");
let btn6 = document.getElementById("n6");
let btn7 = document.getElementById("n7");
let btn8 = document.getElementById("n8");
let btn9 = document.getElementById("n9");
let bt_persentage = document.getElementById("persentage");
let bt_ac = document.getElementById("ac");
let bt_division = document.getElementById("division");
let bt_multi = document.getElementById("multi");
let bt_subtraction = document.getElementById("subtraction");
let bt_add = document.getElementById("add");
let bt_equal = document.getElementById("equal");
let bt_point = document.getElementById("point");
let tem_formula = ``;
let no_double_symbol = /[\/+*.\-]/;
let flag = 0;//判断是否为结果 0为否 1为是  用于防止在得出结果后仍可添加数字

function equal() {
    let formula = screen.innerHTML;
    let result = eval(formula);
    screen.innerHTML = result;
    tem_formula = result;
    tem_formula += "";//再转换为string型，让其能调用charAt()方法
    flag = 1;
}
function acDisplay() {
    screen.innerHTML = "";
    tem_formula = ``;
}
function numInsertJuge() {
    let s = this.getAttribute("id");
    if (s == "n1") {
        if (flag == 1) {
            return;
        }
        insert(1);
        return;
    }
    if (s == "n2") {
        if (flag == 1) {
            return;
        }
        insert(2);
        return;
    }
    if (s == "n3") {
        if (flag == 1) {
            return;
        }
        insert(3);
        return;
    }
    if (s == "n4") {
        if (flag == 1) {
            return;
        }
        insert(4);
        return;
    }
    if (s == "n5") {
        if (flag == 1) {
            return;
        }
        insert(5);
        return;
    }
    if (s == "n6") {
        if (flag == 1) {
            return;
        }
        insert(6);
        return;
    }
    if (s == "n7") {
        if (flag == 1) {
            return;
        }
        insert(7);
        return;
    }
    if (s == "n8") {
        if (flag == 1) {
            return;
        }
        insert(8);
        return;
    }
    if (s == "n9") {
        if (flag == 1) {
            return;
        }
        insert(9);
        return;
    }
    if (s == "n0") {
        if (flag == 1) {
            return;
        }
        insert(0);
        return;
    }
    if (s == "add") {
        let testcase = tem_formula.charAt(tem_formula.length - 1);
        if (no_double_symbol.test(testcase) || Number(tem_formula) == 0) {//若前一个字符是+或者整个字符串为空,则不能添加+
            return;
        }
        flag = 0;
        insert("+");
        return;
    }
    if (s == "point") {
        if (no_double_symbol.test(tem_formula.charAt(tem_formula.length - 1)) || Number(tem_formula) == 0) {
            return;
        }
        flag = 0;
        insert(".");
        return;
    }
    if (s == "division") {
        if (no_double_symbol.test(tem_formula.charAt(tem_formula.length - 1)) || Number(tem_formula) == 0) {
            return;
        }
        flag = 0;
        insert("/");
        return;
    }
    if (s == "multi") {
        if (no_double_symbol.test(tem_formula.charAt(tem_formula.length - 1)) || Number(tem_formula) == 0) {
            return;
        }
        flag = 0;
        insert("*");
        return;
    }
    if (s == "subtraction") {
        if (no_double_symbol.test(tem_formula.charAt(tem_formula.length - 1)) || Number(tem_formula) == 0) {
            return;
        }
        flag = 0;
        insert("-");
        return;
    }
    if (s == "persentage") {
        if (no_double_symbol.test(tem_formula) || Number(tem_formula) == 0) {
            return;
        }
        getPersentage();
        return;
    }
}
function getPersentage() {
    let result = Number(tem_formula) / 100;
    screen.innerHTML = result;
    tem_formula = result;
    tem_formula += "";//再转换为string型，让其能调用charAt()方法
}
function insert(symbols) {
    tem_formula += `${symbols}`;
    screen.innerHTML = tem_formula;
}
bt_ac.addEventListener("click", acDisplay, false);
bt_equal.addEventListener("click", equal, false);
btn0.addEventListener("click", numInsertJuge, false);
btn1.addEventListener("click", numInsertJuge, false);
btn2.addEventListener("click", numInsertJuge, false);
btn3.addEventListener("click", numInsertJuge, false);
btn4.addEventListener("click", numInsertJuge, false);
btn5.addEventListener("click", numInsertJuge, false);
btn6.addEventListener("click", numInsertJuge, false);
btn7.addEventListener("click", numInsertJuge, false);
btn8.addEventListener("click", numInsertJuge, false);
btn9.addEventListener("click", numInsertJuge, false);
bt_add.addEventListener("click", numInsertJuge, false);
bt_subtraction.addEventListener("click", numInsertJuge, false);
bt_multi.addEventListener("click", numInsertJuge, false);
bt_persentage.addEventListener("click", numInsertJuge, false);
bt_point.addEventListener("click", numInsertJuge, false);
bt_division.addEventListener("click", numInsertJuge, false);