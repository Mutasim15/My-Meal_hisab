function getInputFieldValueById(inputFieldId){
    const inputField =document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value='';
    // console.log(inputFieldValue);
    return inputFieldValue;
}

function getElementValueById(elementValueId){
const elementAmount =document.getElementById(elementValueId);
const elementAmountString = elementAmount.innerText;
const elementAmountValue = parseFloat(elementAmountString);
// console.log(elementAmountValue);
return elementAmountValue;
}

function setTextElementValueById(elementId,newValue){
const textElement = document.getElementById(elementId);
textElement.innerText = newValue;
}



document.getElementById('btn_deposit').addEventListener('click',function(){
console.log('Deposit Button clicked');
const newDepositAmount =getInputFieldValueById('depositfield')
const previousDepositAmount = getElementValueById('depositAmount')
const totalDepositAmount =newDepositAmount+previousDepositAmount;
console.log(totalDepositAmount);
setTextElementValueById('depositAmount',totalDepositAmount);
const balance = getElementValueById('balance');
const DueBalance= newDepositAmount+ balance;
setTextElementValueById('balance',DueBalance);



})