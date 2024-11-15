
let inputData = document.getElementById("data");
let span = document.getElementById("show");

function go(){
    span.innerHTML = inputData.value;
}


function changeBG(input){
    input.style.borderColor="red";
    input.style.backgroundColor="cyan";
}
function changeBG2(input){
    input.style.borderColor="gray";
    input.style.backgroundColor="white";
}