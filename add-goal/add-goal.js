import {signOut} from "../login/auth.js";

document.querySelector('#sign-out')?.addEventListener('click', async () => {
    const result = await signOut();

    if (result.success) {
        window.location.href = '/login/';
        localStorage.removeItem('session');
    }
});