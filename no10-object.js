// maths = {
//     addition : function (num1, num2){
//         return (num1+num2)    },

//     substraction : function (num1, num2){
//         return (num1-num2)    },

//     multiplication : function (num1, num2){
//         return (num1*num2)    },

//     division : function (num1, num2){
//         return (num1/num2)    },

//     remainder : function (num1, num2){
//         return (num1%num2)    }

// }

// function clkadd(){
//     let n1 = parseInt(document.getElementById("add1").value);
//     let n2 = parseInt(document.getElementById("add2").value);
//     document.getElementById("answer").innerHTML = maths.addition(n1,n2);
// }
// function clksub(){
//     let n1 = parseInt(document.getElementById("add1").value);
//     let n2 = parseInt(document.getElementById("add2").value);
//     document.getElementById("answer").innerHTML = maths.substraction(n1,n2);
// }
// function clkproduct(){
//     let n1 = parseInt(document.getElementById("add1").value);
//     let n2 = parseInt(document.getElementById("add2").value);
//     document.getElementById("answer").innerHTML = maths.multiplication(n1,n2);
// }
// function clkdivide(){
//     let n1 = parseInt(document.getElementById("add1").value);
//     let n2 = parseInt(document.getElementById("add2").value);
//     document.getElementById("answer").innerHTML = maths.division(n1,n2);
// }
// function clkmode(){
//     let n1 = parseInt(document.getElementById("add1").value);
//     let n2 = parseInt(document.getElementById("add2").value);
//     document.getElementById("answer").innerHTML = maths.remainder(n1,n2);
// }


function weight(mass,gravity){
    if (gravity== undefined){
        document.write(mass*9.8)
    }
    else{
        document.write(mass*gravity)
    }
}

weight(100,33)