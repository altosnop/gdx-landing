/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      jupiter: '#3647E1',
      saturn: '#4A5CFF',
      neptune: '#2534BC',
      earth: '#DEFF11',
      venus: '#FF5B5A',
      mars: '#5AF93F',
      mercury: '#333333',
      facebook: '#1877F2',
      uranus: {
        1: '#6FCC60',
        2: '#33B41E',
      },
      'first-screen': {
        1: '#00000033',
        2: '#02119280',
      },
      'jupiter-second': {
        1: '#293FFF66',
        2: '#293FFFCC',
      },
      white: {
        100: '#FFFFFF',
        50: '#FFFFFF80',
        30: '#FFFFFF4D',
        20: '#FFFFFF33',
        10: '#FFFFFF1A',
      },
      black: {
        100: '#000000',
        50: '#00000080',
      },
      dark: {
        0: '#00202C',
        1: '#637282',
        2: '#95A2AF',
        3: '#C8CED7',
        4: '#DFE4E9',
        5: '#EFF1F3',
      },
    },
    fontFamily: {
      main: ['Poppins', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        640: '640px',
      },
      padding: {
        10: '10px',
      },
      fontSize: {
        88: '88px',
        56: '56px',
        52: '52px',
        48: '48px',
        32: '32px',
        24: '24px',
        20: '20px',
        15: '15px',
        13: '13px',
        12: '12px',
        10: '10px',
      },
      lineHeight: {
        132: '132px',
        80: '80px',
        65: '65px',
        56: '56px',
        44: '44px',
        36: '36px',
        28: '28px',
        24: '24px',
        20: '20px',
        18: '18px',
        16: '16px',
        14: '14px',
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        inner: 'inset 2px 2px 12px 0px rgba(0, 0, 0, 0.25)',
        'black-50': '0px 0px 8px 0px rgba(0, 0, 0, 0.5)',
        'black-25': '0px 0px 8px 0px rgba(0, 0, 0, 0.25)',
        'black-10': '0px 0px 8px 0px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        main: "linear-gradient(180deg, #293FFF66, #293FFFCC 100%), url('/bg.webp')",
        header: "url('/header.webp')",
        footer: "url('/footer.webp')",
      },
    },
  },
  plugins: [],
}
