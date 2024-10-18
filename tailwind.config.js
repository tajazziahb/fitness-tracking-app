     module.exports = {
         content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
         theme: {
             extend: {
                 colors: {
                     orangeTheme: '#FF6600',
                     blackTheme: '#000000',
                     limeTheme: '#A4C639',
                 },
             },
         },
         plugins: [require('daisyui')],
         daisyui: {
             themes: [
                 {
                     orangeTheme: {
                         primary: '#FF6600',
                         secondary: '#FFF',
                         accent: '#000',
                     },
                     blackTheme: {
                         primary: '#000',
                         secondary: '#FFF',
                         accent: '#FF6600',
                     },
                     limeTheme: {
                         primary: '#A4C639',
                         secondary: '#FFF',
                         accent: '#FF6600',
                     },
                 },
             ],
         },
     }