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
export async function signIn(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) {
        console.error('Error signing in:', error.message)
        return error.message
    }

    console.log('User signed in:', user)
    return 'Login successful'
}

// Function to log out
export async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
        console.error('Error signing out:', error.message)
        return error.message
    }

    console.log('User signed out')
    return 'Logout successful'
}