// src/auth.js
import {supabase} from "../src/supabase.js";

// Function to sign up / create a new account
export async function createAccount(email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    // console.log(user)

    if (error) {
        console.error('Error creating account:', error.message)
        return {success: false, message: error.message};
    }

    console.log('Account created successfully', user)
    return 'Account created, please verify your email.'
}

// Function to log in
export async function login(email, password) {
    const { data: {session}, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    console.log(session)

    if (error) {
        console.error('Error logging in:', error.message);
        return {success: false, message: error.message};
    } else {
        // console.log('Logged in successfully:', session)
        return {success: true, session};
    }
}

// Sign-out function
 export async function signOut() {
    const { error } = await supabase.auth.signOut()


    if (error) {

        alert('Error signing out:' + error.message);
        return error.message
    } else {
        alert('Signed out successfully!')
        localStorage.removeItem('session');
        window.location.href = '/login/';
    }
}