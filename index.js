const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})
const sendData = (sRate, count) => {
    if (sRate === count){
        alert('Registration Success');
        swal("Good job!", "You are now registerd!", "success");
    }else{
        return false;
    }
}
const successMsg = () => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1;
    for(var i = 0; i<formCon.length; i++){
        
        if(formCon[i].className === 'form-control success')
        {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate, count);

        } else{
            return false;
        }
    }
}

const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2)return false;
    if(dot === emailVal.length-1)return false;
    return true;
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input, errormsgs){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
    

// validate user name
    if (usernameVal === ""){
        setErrorMsg(username, 'user name can not be blank');
    }else if(usernameVal.length <= 2){
        setErrorMsg(username, 'username min 3 char');
    }else{
        setSuccessMsg(username);
    }
// validate email
    if (emailVal === ""){
        setErrorMsg(email, 'email can not be blank');
    }else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email not valid');
    }else{
        setSuccessMsg(email);
    }
// validate phone
    if (phoneVal === ""){
        setErrorMsg(phone, 'phone can not be blank');
    }else if(phoneVal.length != 10){
        setErrorMsg(phone, 'phone not valid');
    }else{
        setSuccessMsg(phone);
    }
// validate password
    if (passwordVal === ""){
        setErrorMsg(password, 'password can not be blank');
    }else if(passwordVal.length <= 5){
        setErrorMsg(password, 'min 6 char');
    }else{
        setSuccessMsg(password);
    }
// validate phone
    if (cpasswordVal === ""){
        setErrorMsg(cpassword, 'confir password can not be blank');
    }else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'password dont match');
    }else{
        setSuccessMsg(cpassword);
    }
    successMsg();
}


