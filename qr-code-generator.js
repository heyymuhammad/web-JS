
function generate() {
    first_name = document.getElementById("first_name").value;
    last_name = document.getElementById("last_name").value;
    email = document.getElementById("email").value;
    user_info = [
        "Name- "+ first_name,
        last_name,
        "Email- " + email
    ]
    result = user_info.join(" ")

    QRgen = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${result}`;
    QRimage = document.getElementById("image");
    QRimage.src = QRgen;
    console.log(result)
}