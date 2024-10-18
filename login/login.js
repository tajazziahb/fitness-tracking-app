// src/login.js
import { login } from './auth.js'
document.querySelector('#login-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    const result = await login(email, password);

    // alert(result.message || 'Logged in successfully!')

    // console.log(result.session)

    if (result.success) {
        window.location.href = '/dashboard/';
        localStorage.setItem('session', JSON.stringify(result.session) );
    }
});

