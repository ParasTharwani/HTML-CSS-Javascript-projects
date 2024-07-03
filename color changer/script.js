
const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = '#' + randomNumber.toString(16);
    console.log(hexCode)
    document.body.style.backgroundColor = hexCode;
document.getElementById('color-code').innerText = hexCode;
navigator.clipboard.writeText(hexCode)
}

//event call
document.getElementById('btn').addEventListener(
    'click',
    getColor
)

// initial call
getColor()