select = prompt("Select One:  1) S = v*t  2) w = m*g");
if (select==1){
    let find = prompt("What do you want to find?  S, v or t ").toLowerCase();
    if(find == "s"){
        v = prompt("Enter the value of Velocity");
        t = prompt("Enter the value of Time");
        document.write(v*t)
    }
    else if(find == "v"){
        S = prompt("Enter the value of Distance");
        t = prompt("Enter the value of Time");
        document.write(S/t)
    }
    else if(find == "t"){
        v = prompt("Enter the value of Velocity");
        S = prompt("Enter the value of Distance");
        document.write(S/v)
    }
    else{
        alert("Wrong Command");
    }
}
else if (select==2){
    let find = prompt("What do you want to find?  w or m").toLowerCase();
    if(find == "w"){
        m = prompt("Enter the value of mass");
        g = 10
        document.write(m*g)
    }
    else if(find == "m"){
        w = prompt("Enter the value of Distance");
        g = 10
        document.write(w/g)
    }
    else{
        alert("Wrong Command");
    }
    
}

else{
    alert("Wrong Command");
}