let nine = document.getElementById("nine");
let eight = document.getElementById("eight");
let seven = document.getElementById("seven");
let six = document.getElementById("six");
let five = document.getElementById("five");
let four = document.getElementById("four");
let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");
let zero = document.getElementById("zero");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let equal = document.getElementById("equal");

let txt = "";
nine.addEventListener("click", () => {
    txt += "9";
    display.innerText = txt;
})

eight.addEventListener("click", () => {
    txt += "8";
    display.innerText = txt;
})

seven.addEventListener("click", () => {
    txt += "7";
    display.innerText = txt;
})

six.addEventListener("click", () => {
    txt += "6";
    display.innerText = txt;
})

five.addEventListener("click", () => {
    txt += "5";
    display.innerText = txt;
})

four.addEventListener("click", () => {
    txt += "4";
    display.innerText = txt;
})

three.addEventListener("click", () => {
    txt += "3";
    display.innerText = txt;
})

two.addEventListener("click", () => {
    txt += "2";
    display.innerText = txt;
})

one.addEventListener("click", () => {
    txt += "1";
    display.innerText = txt;
})

zero.addEventListener("click", () => {
    txt += "0";
    display.innerText = txt;
})

clear.addEventListener("click", () => {
    txt = "";
    display.innerText = txt;
})

plus.addEventListener("click", () => {
    if(txt.charAt(txt.length-1) == "-" || txt.charAt(txt.length-1) == "*" || txt.charAt(txt.length-1) == "+" || txt.charAt(txt.length-1) == "/"){
        display.innerText = txt;
     }
     else{
         txt += "+";
         display.innerText = txt;
     }
})

minus.addEventListener("click", () => {
    if(txt.charAt(txt.length-1) == "-" || txt.charAt(txt.length-1) == "*" || txt.charAt(txt.length-1) == "+" || txt.charAt(txt.length-1) == "/"){
        display.innerText = txt;
     }
     else{
         txt += "-";
         display.innerText = txt;
     }
})

multiply.addEventListener("click", () => {
    if(txt.charAt(txt.length-1) == "-" || txt.charAt(txt.length-1) == "*" || txt.charAt(txt.length-1) == "+" || txt.charAt(txt.length-1) == "/"){
       display.innerText = txt;
    }
    else{
        txt += "*";
        display.innerText = txt;
    }
})

divide.addEventListener("click", () => {
    if(txt.charAt(txt.length-1) == "-" || txt.charAt(txt.length-1) == "*" || txt.charAt(txt.length-1) == "+" || txt.charAt(txt.length-1) == "/"){
        display.innerText = txt;
     }
     else{
         txt += "/";
         display.innerText = txt;
     }
})

equal.addEventListener("click", () => {
    if(display.innerText === ''){
        txt = "";
        display.innerText = txt;
    }
    else{
        let ans = eval(display.innerText);
        // console.log(typeof(ans));
        let x = ans.toString();
    txt = x;
    // console.log(typeof(txt));
    display.innerText = txt;
    }  
})