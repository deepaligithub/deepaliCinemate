module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    //this dark mode class is configured in index.html file
    theme: {
      extend: {
        screens: {
          "other": {'min': '340px', 'max': '1200px'}, // Custom screen size for responsive design
        },
        colors: {
          darkbg: "#1E293B", // Custom color for dark mode background 'AllRoutes.js'
        }
      },
    },
    plugins: [],
}