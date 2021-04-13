let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let error=document.getElementById("error");
let error2=document.getElementById("error2");
function vali(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    if(regexp.test(email.value)&&decimal.test(pwd.value)){
        error.innerHTML="vaild";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="invalid Username or Password";
        error.style.color="red";
        return false;
    }
    
}
