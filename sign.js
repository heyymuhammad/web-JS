// // function create_account(){

// //     Name = prompt("Enter your name: ");
// //     Password = prompt("ENter your Password: ");
// //     Email = prompt("Enter your email: ");
// // }
// --

function signin(){
    Name = prompt("Enter your name: ");
    Password = prompt("ENter your Password: ");
    Email = prompt("Enter your email: ");

    user_mail = prompt("Enter your email: ");
    user_password = prompt("ENter your Password: ");

    if (user_mail==Email && user_password==Password || user_mail=="bilalsiddique@gmail.com" && user_password==="bilalsiddique" || user_mail=="awan2350@gmail.com" && user_password=="awan2350"){
        document.write("Welcome " + user_mail +"<br>")
        document.write("You are login Successfuly.");
    }
    else{
        document.write("Incorrect Password.");
    } 
}