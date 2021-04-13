let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let phonenumber = document.getElementById("phonenumber");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
// let reppwd = document.getElementById("reppwd");
let span = document.getElementById("span");

function validation(){
    let regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;

    if(firstname.value==""||lastname.value==""||phonenumber.value==""||email.value==""||pwd.value==""){
        alert("Cannot Be Empty");
        return false;
    }
    else if(regphone.test(phonenumber.value)&&regemail.test(email.value)&&decimal.test(pwd.value)){
        return true;
    }
    else{
        alert("check the data");
        return false;
    }
    
}

function pass(){
    let strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    let mediumPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{3,7}$/;
    if(strongPassword.test(pwd.value)){
        span.innerText="Password is strong";
        span.style.backgroundColor="green";
        span.style.color="white";
    }
    else if(mediumPassword.test(pwd.value)){
        span.innerText="Password is medium";
        span.style.backgroundColor="orange";

    }
    else{
        span.innerText="Password is poor";
        span.style.backgroundColor="red";
        span.style.color="white";
    }
}
