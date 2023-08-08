/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: "Montserrat",
            mono: "Poppins",
         },
         keyframes: {
            fadeIn: {
               "0%": { opacity: 0 },
               "100%": { opacity: 100 },
            },
         },
         animation: {
            fadeIn: "fadeIn 0.2s ease-in-out forwards",
         },
         boxShadow: {
            "video-section": "3px 3px var(--color-secondery)",
         },
      },
   },
   plugins: [],
};
