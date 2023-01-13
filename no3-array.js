rollno = prompt("Which profile do you want? Please type a roll no: 0, 1 or 2.")

let profiles = [
    {
        username: "bilal",
        email: "bilasiddique871@gmail.com",
        password: "bilal1122"
    },
    {
        username: "muhammad",
        email: "muawan541@gmail.com",
        password: "muhammad1122"
    },
    {
        username: "ali",
        email: "muhammadali1020@gmail.com",
        password: "ali1122"
    }
];

document.write("Username:" + profiles[rollno].username+"<br>");
document.write("Email:" + profiles[rollno].email+"<br>");
document.write("Password:" + profiles[rollno].password);
