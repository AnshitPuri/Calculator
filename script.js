const currentDisplay = document.querySelector('#textAreaText')

const buttonEqual = document.querySelector('#buttonEqual')

const buttonAc = document.querySelector('#buttonAc')

const buttonDelete = document.querySelector('#buttonDel')

const button = document.querySelectorAll('.button')

function adjustFontSize() {
    const length = currentDisplay.textContent.length;

    if (length <= 8) {
        currentDisplay.style.fontSize = "75px";
    } else if (length <= 11) {
        currentDisplay.style.fontSize = "60px";
    } else if (length <= 14) {
        currentDisplay.style.fontSize = "48px";
    } else {
        currentDisplay.style.fontSize = "36px";
    }
}

function checkLength() {
    if (currentDisplay.textContent.length >= 30) {
        alert("Can't Enter More Than 30 Digits");
        return false;
    }
    return true;
}

function equalButton() {
    buttonEqual.onclick = () => {
        if (currentDisplay.textContent.trim() === "") {
            currentDisplay.textContent = "0"
            return
        }
        try {
            let result = eval(currentDisplay.textContent)
            currentDisplay.textContent = parseFloat(result.toFixed(2))
        }
        catch {
            currentDisplay.textContent = "Error"
        }
    }
}

function acButton() {
    buttonAc.onclick = () => {
        currentDisplay.textContent = ""
    }
}

function delButton() {
    buttonDelete.onclick = () => {
        if (currentDisplay.textContent === "Error") {
            currentDisplay.textContent = ''
        }
        else if(currentDisplay.textContent === "Infinity"){
            currentDisplay.textContent = ''
        }
        else if(currentDisplay.textContent === "NaN"){
            currentDisplay.textContent = ''
        }
        else {
            currentDisplay.textContent = currentDisplay.textContent.slice(0, -1)
        }
    }
}

button.forEach((button) => {
    if (button.textContent == "AC") {
        acButton()
    }
    else if(button.textContent == "DEL"){
        delButton()
    }
    else if(button.textContent == "="){
        equalButton()
    }
    else {
        button.onclick = () => {
            if (!checkLength()) return;
            currentDisplay.textContent += button.textContent;
            adjustFontSize()
        }
    }
})