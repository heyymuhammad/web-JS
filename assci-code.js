asci = {
    chr : function (asci_code){
        if (asci_code == ""){return " "}
        if (asci_code == 1){return "A"}
        if (asci_code == 2){return "B"}
        if (asci_code == 3){return "C"}
        if (asci_code == 4){return "D"}
        if (asci_code == 5){return "E"}
        if (asci_code == 6){return "F"}
        if (asci_code == 7){return "G"}
        if (asci_code == 8){return "H"}
        if (asci_code == 9){return "I"}
        if (asci_code == 10){return "J"}
        if (asci_code == 11){return "K"}
        if (asci_code == 12){return "L"}
        if (asci_code == 13){return "M"}
        if (asci_code == 14){return "N"}
        if (asci_code == 15){return "O"}
        if (asci_code == 16){return "P"}
        if (asci_code == 17){return "Q"}
        if (asci_code == 18){return "R"}
        if (asci_code == 19){return "S"}
        if (asci_code == 20){return "T"}
        if (asci_code == 21){return "U"}
        if (asci_code == 22){return "V"}
        if (asci_code == 23){return "W"}
        if (asci_code == 24){return "X"}
        if (asci_code == 25){return "Y"}
        if (asci_code == 26){return "Z"}
        if (asci_code > 26){return "Invalid ASCII Code"}

    }
}


function alpha() {  
    ascii = document.getElementById("user_input").value;
    document.getElementById("output").innerHTML = asci.chr(ascii);
}
