/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            sans: "Montserrat",
            mono: "Poppins",
         },
         boxShadow: {
            "video-section": "3px 3px var(--color-secondery)",
         },
      },
   },
   plugins: [],
};
