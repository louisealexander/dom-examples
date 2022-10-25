console.log("Hi There!");
const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const submitButton = document.getElementById('submit');
submitButton.onclick = function(){
    if(firstName.value == "" || secondName.value == ""){
        console.log("fill out the form properly scum!")
    }else{
        console.log("well done u!")
    }
}