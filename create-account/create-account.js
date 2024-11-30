import {createAccount} from "../login/auth.js";

document.querySelector('#create-account-form')?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.querySelector('#create-email').value
  const password = document.querySelector('#create-password').value

  // console.log(email)
  const result = await createAccount(email, password)
  alert(result.message || 'Account created successfully!');
})