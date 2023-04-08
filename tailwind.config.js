/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [],
}

