/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:"class",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },

    plugins: [
        require('daisyui'),
    ],
};
