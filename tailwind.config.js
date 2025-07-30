/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [{
    pattern: /!border-([bt])/
  }, {
    pattern: /!border-([bt])-2/
  }, {
    pattern: /!border-([bt])-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
  }, {
    pattern: /border-([bt])/
  }, {
    pattern: /border-([bt])-2/
  }, {
    pattern: /border-([bt])-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
  }, {
    pattern: /bg-gradient-to-br/
  }, {
    pattern: /from-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
  }, {
    pattern: /via-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
  }, {
    pattern: /to-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
  }, {
    pattern: /bg-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/,
  }, {
    pattern: /text-(gray|yellow|black|white|red|blue|green|purple)-(100|200|300|400|500|600|700|800|900)/
  }],

  theme: {
    extend: {},
  },
  plugins: [],
}

