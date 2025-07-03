let currentDisplay = document.querySelector('#textAreaText')

let buttonEqual = document.querySelector('#buttonEqual')

let buttonAc = document.querySelector('#buttonAc')

let buttonDel = document.querySelector('#buttonDel')

buttonEqual.onclick = () =>{
    adjustFontSize();
    if(currentDisplay.textContent.trim() === ""){
        currentDisplay.textContent = "0"
        return
    }
    try{
        let result = eval(currentDisplay.textContent)
        currentDisplay.textContent= parseFloat(result.toFixed(8))
    }
    catch{
        currentDisplay.textContent = "Error"
    }
}

buttonAc.onclick = () => {
    adjustFontSize();
    currentDisplay.textContent = ""
}

buttonDel.onclick = () => {
    adjustFontSize();
    if(currentDisplay.textContent === "Error"){
        currentDisplay.textContent = ''
    }
    else{
        currentDisplay.textContent = currentDisplay.textContent.slice(0,-1)
    }
}

function adjustFontSize() {
    const length = currentDisplay.textContent.length;

    if (length <= 9) {
        currentDisplay.style.fontSize = "75px";
    } else if (length <= 12) {
        currentDisplay.style.fontSize = "60px";
    } else if (length <= 15) {
        currentDisplay.style.fontSize = "48px";
    } else {
        currentDisplay.style.fontSize = "36px";
    }
}
