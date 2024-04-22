var input = document.querySelector("input");
var imgCon = document.querySelector("#img");
var img = document.querySelector("#con img");
var genBtn = document.querySelector("#genBtn");
var genAgainBtn = document.querySelector("#genAgainBtn");

function genQRCode() {
    if (input.value == "") {
        input.classList = "shake";
        setTimeout(() => {
            input.classList.remove("shake");
        }, 1000);
    }
    else {
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250*250&data=${input.value}`;
        imgCon.style.maxHeight = `1000px`;
        input.value = "";
        setTimeout(() => {
            genBtn.style.display = "none";
            genAgainBtn.style.display = "block";
        }, 3000);
    };
};

function genQRCodeAgain() {
    if (input.value == "") {
        input.classList = "shake";
        setTimeout(() => {
            input.classList.remove("shake");
        }, 1000);
    }
    else {
        imgCon.style.maxHeight = `0`;
        input.value = "";
        setTimeout(() => {
            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=250*250&data=${input.value}`;
            imgCon.style.maxHeight = `1000px`;
        }, 3000);
    }
};

