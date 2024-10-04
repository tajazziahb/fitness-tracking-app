import './style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 <div>
  <div class="p-16 space-y-8">
  
    <h1 class="text-5xl">Welcome to Fit Track</h1>
    
    <button class="btn btn-primary w-1/2">Start Now</button>
  </div>
</div>
`


setupCounter(document.querySelector('#counter'))
