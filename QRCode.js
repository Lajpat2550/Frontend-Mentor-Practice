
const  qr = document.querySelector(".QR");

const qrCode = new QRCode(qr, {
    text: "https://github.com/Lajpat2550",
    width: 128,
    height: 128,
    colorDark: "white",
    colorLight: "blue",
})
