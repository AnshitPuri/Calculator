const currentDisplay = document.querySelector('#textAreaText')

const buttonEqual = document.querySelector('#buttonEqual')

const buttonAc = document.querySelector('#buttonAc')

const buttonDel = document.querySelector('#buttonDel')

const button = document.querySelectorAll('.button')

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

buttonEqual.onclick = () => {
    if (currentDisplay.textContent.trim() === "") {
        currentDisplay.textContent = "0"
        return
    }
    try {
        let result = eval(currentDisplay.textContent)
        currentDisplay.textContent = parseFloat(result.toFixed(8))
    }
    catch {
        currentDisplay.textContent = "Error"
    }
}

buttonAc.onclick = () => {
    currentDisplay.textContent = ""
}

buttonDel.onclick = () => {
    if (currentDisplay.textContent === "Error") {
        currentDisplay.textContent = ''
    }
    else {
        currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
    }
}

button.forEach((button) => {
    button.onclick = () => {
        adjustFontSize()
    }
})