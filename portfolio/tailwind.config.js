module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'ba-dark-blue': '#242582',
        'ba-purple': '#553D67',
        'ba-red': '#F64C72',
        'ba-gray': '#99738E',
        'ba-blue': '#2F2FA2',
        'mg-dark-blue': '#120FCC',
        'mg-med-blue': '#005BFF',
        'mg-light-blue': '#0083FF',
        'mg-lightest-blue': '#00A3FF',
        'mg-teal': '#00C0DE',
        'mg-green': '#00DAAB'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
