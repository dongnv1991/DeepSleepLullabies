import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "night-purple": "#2A1F3D",
                "soft-lavender": "#CFC7F8",
                "baby-blue": "#DCE6F7",
                "moonlight": "#F9F8FD",
                "periwinkle": "#A6B4F2",
                "primary": "#CFC7F8",
                "background-light": "#F9F8FD",
                "background-dark": "#2A1F3D",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
        },
    },
    plugins: [require("@tailwindcss/container-queries"), require("@tailwindcss/forms")],
};
export default config;
