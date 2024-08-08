const myInput = document.getElementById("inputbox");


function display(input){

    myInput.value += input ;
}

function calculate(){
    myInput.value = eval(myInput.value);
}

function remove(){
    myInput.value = "";
}
function delet(){
    myInput.value = myInput.value.slice (0,-1);
}