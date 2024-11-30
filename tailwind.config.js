module.exports = {
    content: ['./settings/index.html','./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {

            colors: {
                'settings-bg': '#FFF5EC',
                'input-bg': '#FFFFFF',
                'toggle-active': '#FF8544',
                'text-primary': '#333333',
            }
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#FF8544",
                    "primary-focus": "#FF7030",
                    warning: "#FF8544",
                },
            },
        ],
    },

}