function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password are required.';
        return false;
    }

   
    if (username === 'admin' && password === 'password123') {
        
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }

    return false; 
}
