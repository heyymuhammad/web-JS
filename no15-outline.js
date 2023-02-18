
let array = new Array();

function push() {
    new_value = document.getElementById('input').value;
    array.push(new_value)
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}

function sort(){
    document.getElementById('output').innerHTML = array.sort()
    document.getElementById('input').value = ''
}
function del(){
    del_item = prompt("Enter the Element Name ")
    del_index = array.indexOf(del_item)
    array.splice(del_index,1)
    document.getElementById('output').innerHTML = array
    document.getElementById('input').value = ''
}
function shift(){
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