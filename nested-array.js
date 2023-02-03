
let my_data = [
    ["First Name", "Last Name", "Father Name"],
    ["Muhammad", "Awan", "Ayub"],
    ["Muhammad", "Bilal", "Siddique"],
    ["Uzman", "Ali", "Shabbir"]
]



document.write("<table border='2'>")

document.write("<th>")
document.write(my_data[0][0])
document.write("</th>")

document.write("<th>")
document.write(my_data[0][1])
document.write("</th>")

document.write("<th>")
document.write(my_data[0][2])
document.write("</th>")

for (let i = 1; i <= my_data.length; i++) {
    document.write("<tr>")

    for (let j = 0; j < my_data[i].length; j++) {

        document.write("<td>")
        document.write(my_data[i][j])
        document.write("</td>")
    }

    document.write("</tr>")
}
document.write("</table>  <br> ")

