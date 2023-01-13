function length(){
        
    let text = document.getElementById("text").value;

    document.write(text.length);
}
function uppercase(){
    
    let text = document.getElementById("upper").value;

    document.write(text.toUpperCase());
}
function lowercase(){
    
    let text = document.getElementById("lower").value;

    document.write(text.toLowerCase());
}
function fromCharCode(){
    
    let text = document.getElementById("number").value;

    document.write(String.fromCharCode(text));
}