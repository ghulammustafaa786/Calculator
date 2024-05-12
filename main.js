const displayInp = document.getElementById("displayInp");
function getBtnValue(val){
    console.log(val);
    displayInp.value += val;
}

function calculatorVal(){
    var val = displayInp.value;
    var ans = eval(val);
    displayInp.value = ans;

}
function clearVal(){
    displayInp.value = "";
}
function delVal(){
    var val = displayInp.value;
    displayInp.value = val.slice(0,-1);
}