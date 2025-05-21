
function appendToDisplay(value){
let display = document.getElementById("display");
 display.value += value;
 console.log(value);
 
// document.getElementById('display').value += value;
}


function clearDisplay(){
let display = document.getElementById("display"); 
display.value="";
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function calculatorResult(){
try{
    let result= eval(document.getElementById("display").value)
console.log(result);
document.getElementById("display").value = result;
}
catch(error){
    console.log(error);
    
}


}