// to find the datatypes

// num1 = 10;
// console.log(typeof(num1));

// Array

//     // local method 
// fruits = "apple";
// vegtables = "carrot";
// fast_food = "burger";

// console.log(fruits);
// console.log(vegtables);
// console.log(fast_food);

//     // Array method
// food = ["apple", "carrot", "burger"];

// console.log(food);
// document.write(food);

//     //Array Index

// console.log(food[0]); //appple  #index starts from 0
// console.log(food[4]); //udefined #no item in index 4

// a = prompt("Enter First name");
// b = prompt("Enter Second name");
// c = prompt("Enter Third name");
// d = prompt("Enter Fourth name");

// food = [a, b, c, d];

// index_number= prompt("Which name you want?");

// document.write(food[index_number]);
// // console.log(food[index_number+1])

// Object

user_first_name = prompt("Enter your First name");
user_last_name = prompt("Enter your Last name");
user_age = prompt("Enter your Age");
user_email = prompt("Enter your email address");

user_data = {
    first_name : user_first_name,
    last_name : user_last_name,
    age : user_age,
    email : user_email
};

user_choice = prompt("What you want?");
document.write(user_data.user_choice);
