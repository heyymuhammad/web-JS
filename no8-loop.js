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

    // --------------

text = prompt("Enter you name");
    for(let i=0; Infinity; i++){
        if (text == "muhammad"){
            break
        }
        else{
            text = prompt("Enter you name");
        }
    }

    // --------------

    num = prompt("Enter the number");
    quantity = prompt("Enter the length");

    for(let i=1; i<=quantity; i++){
        document.write(i*num + "<br>");
    }

    // --------------

    length = prompt("How much names you want?");
    names = [];
    for(i=1; i<=length; i++){
        new_name = prompt("Enter the Name");
        names.push(new_name);
    }
    document.write(`Names=[${names}]`);