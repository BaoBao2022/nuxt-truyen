module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        screens: {
            ssm: '360px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                background: '#1f1f1f',
                primary: '#f43f5e',
                secondary: '#2f2f2f',
                ['highlight']: '#3f3f3f',
                ['deep-black']: '#1a1a1a',
            },
            listStyleType: {
                circle: 'circle',
            },
        },
        fontFamily: {
            primary: 'Nunito, sans-serif',
            secondary: 'League Spartan, sans-serif',
        },
    },
    plugins: []
}