
let array = new Array();

function push() {
    new_value = document.getElementById('input').value;
    array.push(new_value)
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}

function sort() {
    document.getElementById('output').innerHTML = array.sort()
    document.getElementById('input').value = ''
}
function del() {
    array.pop()
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}
function shift() {
    array.shift()
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}

function unshift() {
    new_value = document.getElementById('input').value;
    array.unshift(new_value)
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}

function spli() {
    spli_item = prompt("Enter the Element Name ") //name
    del_index = array.indexOf(spli_item) //index of name
    array.splice(del_index, 1)
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}

function sli() {
    sli_item1 = prompt("Enter the First Element Name ") //name
    sli_item2 = prompt("Enter the Lsst Element Name ") //name
    array.slice(spli_item1,sli_item2) //index of name
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}