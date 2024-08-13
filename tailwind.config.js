/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      "primary": '#C92071',
      "secondary": '#B5B6F2',
      "tertiary": '#991956',
      "error": '#EE4266',
      "success": '#52CA76',
      "warning": '#F6AA1C',
      "fundo": '#F9F8FE',
      "btofer": '#E7FF86',
      "fundoazul": '#D8E3F2',
      "darkgrey": '#474747',
      "fundosapato": '#6962620D',
      "whiteb":'#f8fafc'
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          rotate:{
            "45": "45deg",
            "90": "90deg",
            "135": "135deg",
            
          }
      },
    },
  },
  plugins: [],
};
