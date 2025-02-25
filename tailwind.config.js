/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        self: ["Sora", 'serif'],
        serif: ["Inter", 'serif'],
      },
      
      screens: {
        '3xs' : '20rem',
        '2xs': '21.875rem',
        xs : '28.125rem',
        sm: '34.375rem',
        md: '47.9375rem',
        lg: '61.25rem',
        xl: '67.5rem',
      '2xl': '80rem',
      '3xl': '86.25rem',
      '4xl': '90rem',
      '5xl': '100rem'
      },
    },
  },
  plugins: [],
}