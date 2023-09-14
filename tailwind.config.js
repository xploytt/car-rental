/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      "pop": ['Poppins','sans-serif'],
    },
    screens:{
      "lg": "1024px",
      "nav-width-responsive": '1105px',
      "font-w-responsive": '1136px',
      "footer-grid": '650px',
      "footer-grid-4": "1100px",
      "banner-flex": "751px",

      "team-grid": "801px",
      "team-grid-3": "1151px",
      "testimonials-quote": "441px",

      "testimonials-card-grid": "901px",
      "contact-lg": "951px",

      "about-text": "520px",
      "about-company-flex": "960px",

      "home-text-mobile-hero": "410px",
      "home-text-tab-hero": "450px",

      "booking-grid": "630px",
      "booking-grid-3": "1000px",
      
      "reserve-modal-6": "600px",
      "reserve-modal-65": "650px",
      "fleet-grid": "1051px",
      "fleet-grid-7": "700px",

      "wcu_textbox_flex": "550px"
    }
  },
  plugins: [],
}
