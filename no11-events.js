// Call back Function -------

// function call(show){
//     document.getElementById("h1").innerHTML = show;
// }

// function add(n1,n2){
//     return n1+n2
// }

// call(add(10,10))


function show(){
    let text = document.getElementById("input").value;
    document.getElementById("h1").innerHTML = text;
}
let user_input = document.getElementById("input");
user_input.addEventListener("keydown", show);