$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});

// Hardcoded username/email and password
const staticUserIdentifier = "temp@temp.com"; // Change this to the user identifier
const staticPassword = "Temp@1234"; // Change this to the password

$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

// Login button click event
$('.login-show input[type="button"]').click(function() {
    const enteredUserIdentifier = $('.login-show input[type="text"]').val();
    const enteredPassword = $('.login-show input[type="password"]').val();
    
    // Regular expressions for password requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z\d!@#$%^&*()_+]{6,}$/;
    
    // Check if entered credentials match the static ones and password meets the requirements
    if (enteredUserIdentifier === staticUserIdentifier && passwordRegex.test(enteredPassword)) {
        // Successful login, redirect to main.html
        window.location.href = "main.html";
    } else {
        // Incorrect credentials or password does not meet requirements, display error message
        if (enteredUserIdentifier !== staticUserIdentifier) {
            alert("Invalid username or email. Please try again.");
        } else {
            alert("Invalid password. Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long. Please try again.");
        }
    }
});
