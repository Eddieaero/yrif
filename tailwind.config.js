/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-navy': '#093344', // Custom dark teal/navy
                'brand-blue': '#1E40AF', // Blue 800
                'brand-teal': '#0D9488', // Teal 600 - More grounded than Sky
                'brand-gold': '#F59E0B',
                'brand-light': '#FDFBF7', // Cloud/Cream White
                'brand-dark': '#093344', // Custom dark teal/navy
                'text-primary': '#093344', // Custom dark teal/navy
                'text-secondary': '#475569', // Slate 600
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'], // New Modern Heading Font
            },
            backgroundImage: {
                'gradient-cream': 'linear-gradient(135deg, #FDFBF7 0%, #F5F1E8 100%)', // Warm cream gradient
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            }
        },
    },
    plugins: [],
}
