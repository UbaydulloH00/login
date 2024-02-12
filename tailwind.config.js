/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F3F3F3',
        bgButton:'#607AFB',
        bgHover:'#4762e5'
      },
    },
  },
  plugins: [],
}