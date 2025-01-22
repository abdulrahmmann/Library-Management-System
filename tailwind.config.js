/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primaryWhiteColor: '#D6E0FF',
        primaryDarkColor: '#111624',
        inputColor: '#232839',
        buttonColor: '#E7C9A5',
      },
      backgroundImage: {
        'logo': "url('/book-wise-logo.png')",
        'auth-img': "url('/background-image.png')",
        'gradient-img': "url('/bg-gradient.png')",
        'noise-overlay': "url('/noise-overlay.png')",
      },
      boxShadow: {
        'form-shadow': '0px 0px 70px 0px rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        plex: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

