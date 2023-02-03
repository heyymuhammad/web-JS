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
        if (asci_code == 27){return "a"}
        if (asci_code == 28){return "b"}
        if (asci_code == 29){return "c"}
        if (asci_code == 30){return "d"}
        if (asci_code == 31){return "e"}
        if (asci_code == 32){return "f"}
        if (asci_code == 33){return "g"}
        if (asci_code == 34){return "h"}
        if (asci_code == 35){return "i"}
        if (asci_code == 36){return "j"}
        if (asci_code == 37){return "k"}
        if (asci_code == 38){return "l"}
        if (asci_code == 39){return "m"}
        if (asci_code == 40){return "n"}
        if (asci_code == 41){return "o"}
        if (asci_code == 42){return "p"}
        if (asci_code == 43){return "q"}
        if (asci_code == 44){return "r"}
        if (asci_code == 45){return "s"}
        if (asci_code == 46){return "t"}
        if (asci_code == 47){return "u"}
        if (asci_code == 48){return "v"}
        if (asci_code == 49){return "w"}
        if (asci_code == 50){return "x"}
        if (asci_code == 51){return "y"}
        if (asci_code == 52){return "z"}
        if (asci_code == 53){return "(space)"}
        if (asci_code == 54){return "!"}
        if (asci_code == 55){return '"'}
        if (asci_code == 56){return "#"}
        if (asci_code == 57){return "$"}
        if (asci_code == 58){return "%"}
        if (asci_code == 59){return "&"}
        if (asci_code == 60){return "'"}
        if (asci_code == 61){return "("}
        if (asci_code == 62){return ")"}
        if (asci_code == 63){return "*"}
        if (asci_code == 64){return "+"}
        if (asci_code == 65){return ","}
        if (asci_code == 66){return "-"}
        if (asci_code == 67){return "."}
        if (asci_code == 68){return "/"}
        if (asci_code == 69){return "0"}
        if (asci_code == 70){return "1"}
        if (asci_code == 71){return "2"}
        if (asci_code == 72){return "3"}
        if (asci_code == 73){return "4"}
        if (asci_code == 74){return "5"}
        if (asci_code == 75){return "6"}
        if (asci_code == 76){return "7"}
        if (asci_code == 77){return "8"}
        if (asci_code == 78){return "9"}
        if (asci_code == 79){return ":"}
        if (asci_code == 80){return ";"}
        if (asci_code == 81){return "<"}
        if (asci_code == 82){return "="}
        if (asci_code == 83){return ">"}
        if (asci_code == 84){return "?"}
        if (asci_code == 85){return "@"}
        if (asci_code == 86){return "["}
        if (asci_code == 87){return "\\"}
        if (asci_code == 88){return "]"}
        if (asci_code == 89){return "^"}
        if (asci_code == 90){return "_"}
        if (asci_code == 91){return "`"}
        if (asci_code == 92){return "{"}
        if (asci_code == 93){return "|"}
        if (asci_code == 94){return "}"}
        if (asci_code == 95){return "~"}
        
        
        if (asci_code > 95){return "Invalid ASCII Code"}

    }
}


function alpha() {  
    ascii = document.getElementById("user_input").value;
    document.getElementById("output").innerHTML = asci.chr(ascii);
}
// asci = {
//     chr : function (asci_code){
//         if (asci_code == ""){return " "}
//         if (asci_code == 1){return "A"}
//         if (asci_code == 2){return "B"}
//         if (asci_code == 3){return "C"}
//         if (asci_code == 4){return "D"}
//         if (asci_code == 5){return "E"}
//         if (asci_code == 6){return "F"}
//         if (asci_code == 7){return "G"}
//         if (asci_code == 8){return "H"}
//         if (asci_code == 9){return "I"}
//         if (asci_code == 10){return "J"}
//         if (asci_code == 11){return "K"}
//         if (asci_code == 12){return "L"}
//         if (asci_code == 13){return "M"}
//         if (asci_code == 14){return "N"}
//         if (asci_code == 15){return "O"}
//         if (asci_code == 16){return "P"}
//         if (asci_code == 17){return "Q"}
//         if (asci_code == 18){return "R"}
//         if (asci_code == 19){return "S"}
//         if (asci_code == 20){return "T"}
//         if (asci_code == 21){return "U"}
//         if (asci_code == 22){return "V"}
//         if (asci_code == 23){return "W"}
//         if (asci_code == 24){return "X"}
//         if (asci_code == 25){return "Y"}
//         if (asci_code == 26){return "Z"}
//         if (asci_code > 26){return "Invalid ASCII Code"}

//     }
// }

