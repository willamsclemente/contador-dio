let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0
let variationNumber = 0
let variationNumberWrapper = document.getElementById('variationNumber')

function increment1(){
    variationNumber+=1
    variationNumberWrapper.innerHTML= variationNumber
    testNegative(variationNumber,variationNumberWrapper)
}

function decrement1(){
    variationNumber-=1
    variationNumberWrapper.innerHTML= variationNumber
    testNegative(variationNumber,variationNumberWrapper)
}



function increment(){
    currentNumber+=variationNumber
    currentNumberWrapper.innerHTML= currentNumber
    testNegative(currentNumber,currentNumberWrapper)
}

function decrement(){
    currentNumber-=variationNumber
    currentNumberWrapper.innerHTML= currentNumber
    testNegative(currentNumber,currentNumberWrapper)
}

function multiplier(){
    currentNumber*=variationNumber
    currentNumberWrapper.innerHTML= currentNumber
    testNegative(currentNumber,currentNumberWrapper)
}

function divider(){
    if (variationNumber == 0){
        alert("Não é possivel divisão por zero!!")
    } else{
        currentNumber/=variationNumber
        currentNumberWrapper.innerHTML= currentNumber
        testNegative(currentNumber,currentNumberWrapper)
    }
}

function testNegative(variable, htmlVariable){
    if (variable < 0){
        htmlVariable.style.color= 'red' 
    } else {
        htmlVariable.style.color= 'white'
    }
}