

// let a = 9.4

// document.write(Math.ceil(a));  // round up to 3  #10
// document.write(Math.floor(a)); // round down to 3  #9
// document.write(Math.trunc(a)); // remove the decimal  #9
// document.write(Math.max(10,20,30,40,50)); // maximum number in series  #50
// document.write(Math.min(10,20,30,40,50)); // minimum number in series  #10
// document.write(Math.sqrt(144)); // square root of a number #12
// document.write(Math.cbrt(27)); // square root of a number #3
// document.write(Math.pow(2,3)); // power of a number #2^3 = 8
// document.write(Math.random()); // power of a number #2^3 = 8
// document.write(Math.abs(-25)); // convert negative integer into positive integer #25
// document.write(Math.PI); // PI value #3.14



// my_data = [4,9,16,25,36]
// array_length = my_data.length - 1
// for(let i=0; i<=array_length; i++){

//     my_data[i] = Math.sqrt(my_data[i])

// }
// document.write(my_data + "<br>")
// power = prompt("Enter the Power:")
// power_array = []
// for(let j=0; j<=array_length; j++){

//     power_array[j] = Math.pow(my_data[j] ,power)

// }
// document.write(power_array)


// function rand(){
//     box_height = Math.trunc(Math.random()*500)
//     document.getElementById("box").innerHTML = box_height
//     document.getElementById("box").style.height = `${box_height}px`
//     document.getElementById("box").style.margin = `${box_height}px`
// }


my_data = ["red", "yellow", "blue", "white" , "orange"]
your_data = ["smoke", "alpha", "cream", "offwhite" , "indiared"]

// my_data.pop()                    #red,yellow,blue,white
// my_data.sort()                    #blue,orange,red,white,yellow
// my_data.reverse()                    #orange,white,blue,yellow,red            
// my_data.push("sky")                    #red,yellow,blue,white,orange,sky
// my_data.shift()                    #yellow,blue,white,orange
// my_data.unshift("sky")                    #sky,red,yellow,blue,white,orange
// new_data = my_data.join("_sky ")                    #red_sky yellow_sky blue_sky white_sky orange
// new_data = my_data.concat(your_data)                      #red,yellow,blue,white,orange,smoke,alpha,cream,offwhite,indiared


document.write(my_data)