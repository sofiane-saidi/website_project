const loginForm = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

loginForm.addEventListener('submit', function(event) {
    
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    
    if (emailValue === "") {
        event.preventDefault(); 
        alert("Email field cannot be empty."); 
    } 
    else if (passwordValue.length < 8) {
        event.preventDefault(); 
        alert("Password must be at least 8 characters long."); 
    } 
    else {
        
        alert("Login successful!"); 
    }
});