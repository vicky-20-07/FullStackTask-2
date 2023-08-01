const RandomColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.color = randomCode;
}

const RandomGradient = () => {
    const color1 = Math.floor(Math.random() * 16777215);
    const random1 = "#" + color1.toString(16);
    const color2 = Math.floor(Math.random() * 16777215);
    const random2 = "#" + color2.toString(16);
    document.body.style.background = `linear-gradient(to right top, ${random1}, ${random2})`;
}

document.getElementById("btn").addEventListener("click",RandomGradient);
document.getElementById("btn").addEventListener("click",RandomColor);