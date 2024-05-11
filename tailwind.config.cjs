/** @type {import("tailwindcss").Config} */


const colors = require("tailwindcss/colors");




const production = !process.env.ROLLUP_WATCH;




module.exports = {
    mode: 'jit',
    content: [
        "./src/**",
        "./tavy/**",
    ],
    plugins: [],
    theme: {
        fontFamily: {
            body: ['Roboto Slab'],
            display: ['DM Serif Display', 'Permanent Marker', 'Caveat Brush'],
            sans: ['Lexend'],
            mono: ['IBM Plex Mono'],
        },
        extend: {
            colors: {
                background: "#EEFFEE",
                onBackground: "#000",
                primary: "#005500",
                accent: '#00EE00',
                onPrimary: "#FFF",
                secondary: "#005500",
                onSecondary: "#000",
                error: '#550000',
                onError: "#FFF",
            },
            flex: {
                center_col: "flex flex-col justify-center items-center",
                center_row: "flex flex-row justify-center items-center",
            },
            transitionDelay: {
                0: '0s',
                short: '100ms',
                default: '200ms',
                medium: '400ms',
                long: '800ms',
                1600: '1600ms',
                3200: '3200ms',
            },
            transitionDuration: {
                DEFAULT: '200ms',
                0: '0s',
                100: '100ms',
                200: '200ms',
                400: '400ms',
                800: '800ms',
                1600: '1600ms',
                3200: '3200ms',
            },
        },
    },
}
