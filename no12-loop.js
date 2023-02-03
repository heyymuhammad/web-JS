
table_no = prompt("Enter the no of Tables you want:")
for (i = 2; i <= table_no; i++) {
    document.write("<table border='2'>")

    for (j = 1; j <= 10; j++) {
        document.write("<tr>")
        document.write("<td>")
        document.write(i + "x" + j + "=" + i * j + "<br>")
        document.write("</td>")
        document.write("</tr>")
    }
    document.write("</table>  <br>")
}