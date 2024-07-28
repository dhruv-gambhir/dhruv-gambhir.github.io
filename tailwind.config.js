/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                mywhite: "#ffffff",
                mypink: "#fa57c1",
                mypurple: "#b166cc",
                mydarkblue: "#7572ff",
                mylightblue: "#69a6f9",
            },
            keyframes: {
                halo: {
                    "0%, 100%": { boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0)" },
                    "50%": {
                        boxShadow: `0 0 20px 10px rgba(250, 87, 193, 0.5), 0 0 40px 20px rgba(177, 102, 204, 0.5), 0 0 60px 30px rgba(117, 114, 255, 0.5), 0 0 80px 40px rgba(105, 166, 249, 0.5)`,
                    },
                },
            },
            animation: {
                halo: "halo 4s infinite",
            },
        },
    },
    plugins: [],
};
