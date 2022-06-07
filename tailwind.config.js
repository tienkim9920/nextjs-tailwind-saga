module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px", //2xl needs quotes because it starts with a number
    },
    fontSize: {
      10: "1rem",
      11: "1.1rem",
      12: "1.2rem",
      13: "1.3rem",
      14: "1.4rem",
      15: "1.5rem",
      16: "1.6rem",
      17: "1.7rem",
      18: "1.8rem",
      20: "2rem",
      22: "2.2rem",
      24: "2.4rem",
      30: "3rem",
      34: "3.4rem",
      54: "5.4rem",
    },
    colors: {
      // set up theme colors
      transparent: "transparent",
      primary: {
        0: "rgba(0,0,0,0.2)",
        50: "#114112108",
        100: "#f4f6fa",
        200: "#b5bede",
        300: "#7182c1",
        400: "#415395",
        500: "#242e52",
        600: "#1f2847",
        700: "#1a223c",
        800: "#141a2e",
        900: "#101423",
      },
      white: {
        0: "#FFFFFF",
        500: "#F4F3F0",
        600: "#F4F2eF",
      },
      secondary: {
        500: "#BF6B21",
      },
      base: {
        500: "#ddd6c5",
        600: "#83817C",
      },
      green: {
        400: "#5DFE83",
        500: "#1E8B37",
      },
      lightBlue: {
        500: "#02499D",
        600: "#024AB2",
      },
      orange: {
        300: "#EA5D3A",
        400: "#F75C38",
        500: "#F75B37",
        600: "#BF6B21",
      },
      gray: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#707070",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
    },
    boxShadow: {
      btn: "3px 5px 8px #00000017",
      primary: "3px 5px 8px #00000029",
      secondary: "0px 3px 6px #00000029;",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      boxShadow: {
        rainbow:
          "0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2",
      },
      borderWidth: {
        2: "2px",
        3: "3px",
      },
      opacity: {
        6: ".6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


