var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error')
var mailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName() {

    var name = document.getElementById('contact-name').value;
    if(name.length == 0){
       nameError.innerHTML = 'name required';
       return false;
   }
   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'write full name'
    return false;
   }
   nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
   return true;
}

function validatePhone() {
       var phone = document.getElementById('contact-phone').value;
      if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
      }
      if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should 10 digits';
        return false;
      }
      if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please';
        return false;
      }
      
      phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
      return true;
}

function validateEmail() {
    var mail = document.getElementById('contact-email').value;
    if(mail.length == 0){
        mailError.innerHTML = 'email required'
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'email invalid'
        return false;
    }

    mailError.innerHTML = '<i class="fas fa-check-circle"></i>';
      return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value
     var required = 20;  
    var left = required - message.length;
    
    if(left>0){
          messageError.innerHTML = left + ' more charecters required';
          return false;
        }
        messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return true;
}

function validateForm(){
if(validateName() || validatePhone() || validateEmail() || validateMessage()) {
    submitError.style.display = 'block';      
    submitError.innerHTML = 'please fix error submit';
      setTimeout(function(){submitError.style.display = 'none';}, 3000);     
    return false;
        }
}  