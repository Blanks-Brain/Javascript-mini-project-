

const input= document.getElementById("input")

const display = document.getElementById("answer")

function check(){
    const value = input.value;
    
   
    if (isPalidrom(value))
        display.innerText="Yes"
        
    

    else 
        display.innerText = "No"
    
}

function isPalidrom(value){
    
    const num = value.split("").reverse().join("")
    console.log(num)
    console.log(value)

    if (num === value)
        return true 
    

    return false
    
}