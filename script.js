let currentDisplay = document.querySelector('#textAreaText')

let buttonDivide = document.querySelector('#buttonDivide')

let buttonEqual = document.querySelector('#buttonEqual')

buttonEqual.onclick = () =>{
    if(currentDisplay.textContent.trim() === ""){
        currentDisplay.textContent = "0"
        return
    }
    try{
        let result = eval(currentDisplay.textContent)
        currentDisplay.textContent=result
    }
    catch{
        currentDisplay.textContent = "Error"
    }
}