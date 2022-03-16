module.exports = {
  content: ["./src/**/*.{md,njk,html}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("tailwind-gradient-mask-image"),
  ],
}
