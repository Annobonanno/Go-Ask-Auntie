module.exports = {
  content: ["./src/**/*.{md,njk,html}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.navy"),
              '&:hover': {
                "textDecoration": "underline",
              },
              "textDecoration": "none",
            },
          },
        },
      }),
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        navy: { DEFAULT : '#262259'},
        red: { DEFAULT : '#EF3F5B'},
        teal: { DEFAULT : '#3FBDAF',
                'light': '#81C6CE',},
        
        purple: { DEFAULT : '#822369'},
      },
      backgroundImage: {
        'map': 'url("/img/bg-map.png")',
        'pattern': 'url("/img/bg-pattern.png")',
        'condom': 'url("/img/bg-condom.png")',
        'hero': 'url("/img/bg-hero.png")',
      },
      fontFamily: {
        passionOne: ["Passion One", "cursive"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("tailwind-gradient-mask-image"),
  ],
}
