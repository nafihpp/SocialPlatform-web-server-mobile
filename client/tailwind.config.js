/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            sm: { max: "320px" },
            // => @media (max-width: 320px) { ... }

            md: { max: "781px" },
            // => @media (max-width: 781px) { ... }

            lg: { max: "1181px" },
            // => @media (max-width: 1281px) { ... }
        },
    },
    plugins: [],
};
