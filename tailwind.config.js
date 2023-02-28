/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      vscode: "linear-gradient(to left, #91EAE4, #86A8E7, #7F7FD5)",
    },
    extend: {
      colors: {
        primary: "#1E1F35",
      },
    },
  },
  plugins: [],
};
