// burger_size = prompt("Which size of Burger do you want to order? Small, Medium or Large");

// if (burger_size.match("Small") ){
//     document.write("Total Bill = Rs 500")
// }
// else if (burger_size.match("Medium") ){
//     document.write("Total Bill = Rs 800")
// }
// else if (burger_size.match("Large") ){
//     document.write("Total Bill = Rs 1200")
// }
// else{
//     document.write("Unexpected Answer.")
// }

score = prompt("Write you Scores below.");

if (score >= 80 && score<= 100){
    document.write("Wonderful");
}
else if (score >= 70 && score<= 79){
    document.write("Excellent");
}
else if (score >= 60 && score<= 69){
    document.write("Good");
}
else if (score >= 50 && score<= 59){
    document.write("Need Improvement");
}
else if (score <= 49){
    document.write("Fail");
}
else{
    document.write("Wrong Command!"+"<br>"+"Make Sure you have written scores within range of 0-100.")
}