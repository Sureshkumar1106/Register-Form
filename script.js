const form = document.querySelector('#form')
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const phoneno = document.querySelector('#phoneno');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
    e.preventDefault();

    
    }
})

function validateInputs(){
    const fullnameVal = fullname.value.trim()
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phonenoVal = phoneno.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(fullnameVal===''){
        success = false;
        setError(fullname,'Fullname is required')
    }
    else{
       setSuccess(fullname)
    }

    if(usernameVal===''){
        success = false;
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(phonenoVal===''){
        success = false;
        setError(phoneno,'Phone number is required')
    }
    else{
        setSuccess(phoneno)
    }

    if(passwordVal===''){
        success = false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

}
//element-password, msg-pwd is reqd
function setError(element,message){
   const inputbox = element.parentElement;
   const errorElement = inputbox.querySelector('.error')

   errorElement.innerText = message;
   inputbox.classList.add('error')
   inputbox.classList.remove('success')
}

function setSuccess(element){
    const inputbox = element.parentElement;
    const errorElement = inputbox.querySelector('.error')
 
    errorElement.innerText = '';
    inputbox.classList.add('success')
    inputbox.classList.remove('error')
 }

 const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        

    );
 };


  
