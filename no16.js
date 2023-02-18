
emails = [
    "muhammad@gmail.com",
    "awan@gmail.com",
    "bilal@gmail.com",
    "uzman@gmail.com",
    "ahmed@gmail.com",
]

function submit() {
    user_email = (document.getElementById("input").value).toLowerCase();
    actual_email = emails[emails.indexOf(user_email)];
    if (user_email== ""){
        document.getElementById("output").innerHTML = "Please Write You Email"
    }

    else if (emails.includes(user_email) && (user_email.length == actual_email.length)) {
        document.getElementById("output").innerHTML = "Email Already Exist"
    }

    else if (user_email.includes("@") && user_email.includes(".com")){
        emails.push(user_email)
        document.getElementById("output").innerHTML = "Email Submitted Successfully"

    }

    else{
        document.getElementById("output").innerHTML = "Invalid Email"
    }

    console.log(emails)
}

