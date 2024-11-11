
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("errorMessage");
    let result = email.includes("@")


if (name === "") {
    errorMessage.textContent = "Put a value in the empty field";
} 
else if(!result) {
    errorMessage.textContent = "Put a valid Email";
} 
else {
    errorMessage.innerHTML ="The form has been sbmitted";
    document.getElementById("name").value = "";   
    document.getElementById("email").value = "";
}
}


 