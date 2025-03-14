const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success message
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// email validator
// not working
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]\{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'email is not valid')
    }

}


// method 1
// event listeners
// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     if (username.value === ''){
//         showError(username,'username is required');
//     } else {
//         showSuccess(username);
//     }

//     if (email.value === ''){
//         showError(email,'email is required');
//     }else if(!validateEmail(email.value)) {
//         showError(email,'email is not valid');
//     }else {
//         showSuccess(email);
//     }

//     if (password.value === ''){
//         showError(password,'password is required');
//     } else {
//         showSuccess(password);
//     }

//     if (password2.value === ''){
//         showError(password2,'confirm password is required');
//     } else {
//         showSuccess(password2);
//     }
// });

// method 2
//check required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
            // showError(input,`${input.id} is required`);
        }else{
            showSuccess(input);
        }
        // console.log(input.value);
    });
}

// check input length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);        
    }else{
        showSuccess(input);
    }
}

//check passwords match
function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'password does not match');
    }
}

//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// event listener
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordsMatch(password,password2);
});


// console.log(input);
