/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@spartan-ng/brain/hlm-tailwind-preset')],
  content: [
    './src/**/*.{html,ts}',
    './REPLACE_WITH_PATH_TO_YOUR_COMPONENTS_DIRECTORY/**/*.{html,ts}',
  ],
  theme: {
    screens: {
      'xs': '430px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primaryWhiteColor: '#D6E0FF',
        primaryDarkColor: '#111624',
        darkTextColor: '#16191E',
        primaryDarkColor2: '#1A1D1F',
        inputColor: '#232839',
        buttonColor: '#E7C9A5',
        lightYellowColor: '#EED1AC',
      },
      backgroundImage: {
        'logo': "url('/book-wise-logo.png')",
        'auth-img': "url('/background-image.png')",
        'gradient-img': "url('/bg-gradient.png')",
        'noise-overlay': "url('/noise-overlay.png')",
        'main-background': "url('/main-background.png')",
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

