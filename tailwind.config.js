/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: { 
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        'fadeInDown': 'fadeInDown 1.2s linear',
        'fadeInDownSlider': 'fadeInDown 1s linear',
        'fadeInSlider': 'fadeIn 1s linear',
        'fadeIn': 'fadeIn 1.4s linear',
        'fadeInScaleProjectHome': 'fadeInScale 1.4s ease',
        'fadeInScaleTestimonialHome': 'fadeInScale 1.4s ease',
        'fadeInUP': 'fadeInUP 1.2s linear',
        'fadeInRight': 'fadeInRight 1.2s linear',
        'fadeInLeft': 'fadeInLeft 1.2s linear',
      },
      keyframes: {
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(-300px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0px)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-300px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUP: {
          '0%': { opacity: '0', transform: 'translateY(1000px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(-1000px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }, 
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(1000px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
    screens: {
      phone: '360px', // Small phones
      sm: '480px', // Regular phones
      md: '768px', // Tablets
      lg: '1024px', // Laptops
      xl: '1440px', // Large screens
      '2xl': '1920px', // Full HD screens and TVs
      '4k': '2560px', // 4K screens
    },
  },
  plugins: [],
};
