let currentDisplay = document.querySelector('#textAreaText')

let buttonEqual = document.querySelector('#buttonEqual')

let buttonAc = document.querySelector('#buttonAc')

let buttonDel = document.querySelector('#buttonDel')

buttonEqual.onclick = () =>{
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
    currentDisplay.textContent = ""
}

buttonDel.onclick = () => {
    currentDisplay = currentDisplay.textContent.slice(-1)
}