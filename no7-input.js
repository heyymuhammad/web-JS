let set_email = "muawan541@gmail.com";
    let set_pass = 2350;
    
    function login(){
        
        let email = document.getElementById("user_email").value;
        let pass = document.getElementById("user_pass").value;

    
        if (email==set_email && pass == set_pass){
            document.write("Login Successfully");
            
        }
        else{
            alert( "Invalid email or password");
        }
    }  
    function forget(){
        recEmail = prompt("Enter recovery email");
        if (recEmail == "heyymuhammad@gmail.com"){
            alert("Your Password is " + set_pass)
        }
        else{
            alert("Invalid Recovery Email")
        }
    }
    function change(){
        old_pass = prompt("Enter Your old Password");
        if (old_pass == set_pass){
            new_pass = prompt("Enter Your new Password");
            alert("Your Password has been changed");
            let set_pass = old_pass 
        }
        else{
            alert("Old Password do not match")
        }
    }