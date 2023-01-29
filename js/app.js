const getColor = () => {
    const randomNum = Math.floor(Math.random(16777216) * 16777216);
    console.log(randomNum);

    const randomCode = '#' + randomNum.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-id").innerHTML = randomCode;
    document.getElementById("color-id").style.color = randomCode;
    document.getElementById("color-id").style.transition = "2s";

    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn-id").addEventListener(
    "click",
    getColor
)
getColor();