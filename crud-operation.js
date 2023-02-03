
let array = new Array();

function store() {
    array[0] = document.getElementById("input1").value;
    array[1] = document.getElementById("input2").value;
    array[2] = document.getElementById("input3").value;
    console.log("Your values are stored: " + array)
}

function del() {
    del_element = prompt("Enter the Element.");
    del_index = array.indexOf(del_element)
    delete array[del_index];
    console.log("Your given index value is deleted: " + array)
    if (del_index == 0) {
        document.getElementById("input1").value = ""
        document.getElementById("input1").style.backgroundColor = "red"
    }
    else if (del_index == 1) {
        document.getElementById("input2").value = ""
        document.getElementById("input2").style.backgroundColor = "red"
    }
    else if (del_index == 2) {
        document.getElementById("input3").value = ""
        document.getElementById("input3").style.backgroundColor = "red"
    }
    else {
        prompt("Invalid Index Number")
    }
}
function update() {
    new_element = prompt("Enter the Element you want to update")
    old_element = prompt("Enter the Element you want to change")
    update_index = array.indexOf(old_element)
    array[update_index] = new_element
    console.log("Your given index value is updated: " + array)
    if (update_index == 0) {
        document.getElementById("input1").value = array[update_index]
        document.getElementById("input1").style.backgroundColor = "rgb(84, 245, 21)"
    }
    else if (update_index == 1) {
        document.getElementById("input2").value = array[update_index]
        document.getElementById("input2").style.backgroundColor = "rgb(84, 245, 21)"
    }
    else if (update_index == 2) {
        document.getElementById("input3").value = array[update_index]
        document.getElementById("input3").style.backgroundColor = "rgb(84, 245, 21)"
    }
}

function cross1() {
    delete array[0]
    document.getElementById("input1").value = ""
    console.log(array)
    document.getElementById("input1").style.backgroundColor = "red"

}
function cross2() {
    delete array[1]
    document.getElementById("input2").value = ""
    console.log(array)
    document.getElementById("input2").style.backgroundColor = "red"

}
function cross3() {
    delete array[2]
    document.getElementById("input3").value = ""
    console.log(array)
    document.getElementById("input3").style.backgroundColor = "red"

}

