function callNumBtn(numBtnId){
    const numkey = numBtnId.textContent;
    return numkey;
}
const allNumber = document.getElementsByClassName("numkey");
for(const numbers of allNumber){
numbers.addEventListener('click',function(){
    const display = document.getElementById('display');
    
    const mykey = callNumBtn(numbers);
    const displayValue = display.textContent;
    const newInput = displayValue + mykey;
    display.textContent =newInput;
    const myInput = parseFloat(newInput)
    console.log(typeof(myInput),myInput);
})
}
const clear = document.getElementById("clear");
clear.addEventListener('click',function(){
    const recentDisplay = document.getElementById("display");
    recentDisplay.textContent = '';
})

function operator(operatorId){
    const operator = document.getElementById(operatorId);
    const myOperator = operator.textContent;
    return myOperator;
}


