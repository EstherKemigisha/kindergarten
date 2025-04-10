document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register');
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (registerForm && passwordInput && confirmPasswordInput) {
        registerForm.addEventListener('submit', function(event) {
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert('Passwords do not match.');
                event.preventDefault(); // Prevent form submission
            }
        });
    } else {
        console.error("One or more elements not found. Check your HTML.");
    }
});