

function n7(){
    input.insertAdjacentText("beforeend","7");
}
function n8(){
    input.insertAdjacentText("beforeend","8");
}
function n9(){
    input.insertAdjacentText("beforeend","9");
}
function nplus(){
    input.insertAdjacentText("beforeend","+");
}
function n4(){
    input.insertAdjacentText("beforeend","4");
}
function n5(){
    input.insertAdjacentText("beforeend","5");
}
function n6(){
    input.insertAdjacentText("beforeend","6");
}
function nminus(){
    input.insertAdjacentText("beforeend","-");
}
function n1(){
    input.insertAdjacentText("beforeend","1");
}
function n2(){
    input.insertAdjacentText("beforeend","2");
}
function n3(){
    input.insertAdjacentText("beforeend","3");
}
function nmultiply(){
    input.insertAdjacentText("beforeend","x");
}
function n0(){
    input.insertAdjacentText("beforeend","0");
}
function AC(){
    document.getElementById("input").innerHTML = " ";
}
function nequal(){
    cal = document.getElementById("input").innerText 
    if (cal.includes("+")){
        let operation = cal.split("+")
        answer = parseInt(operation[0]) + parseInt(operation[1])
    }
    else if (cal.includes("-")){
        let operation = cal.split("-")
        answer = parseInt(operation[0]) - parseInt(operation[1])
    }
    else if (cal.includes("x")){
        let operation = cal.split("x")
        answer = parseInt(operation[0]) * parseInt(operation[1])
    }
    else if (cal.includes("/")){
        let operation = cal.split("/")
        answer = parseInt(operation[0]) / parseInt(operation[1])
    }
    if (cal.length >=18){
        document.getElementById("input").style.fontSize = "small"
    }
    document.getElementById("input").innerHTML = answer;
}
function ndivide(){
    input.insertAdjacentText("beforeend","/");
}
