/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
    colors: {
      'main-bg-color'		 : '#0A1628',
			'main-purple'		   : '#8655FF',
			'main-purple-dark' : '#6A42CC',
			'white'        		 : 'white',
			'black'      		   : 'black',
			'transparent'			 : 'transparent',
			'white-transparent': 'rgba(255, 255, 255, 0.20)',
			'light-blue'			 : '#EAFFFF',
			'red'							 : '#FB3D5D',
			'blue'						 : '#3AFCFC',
			'pink'						 : '#E359FF',

    },
		fontFamily: {
      'roobert': ['"Roobert"'],
    },
		content: {
			'arrow'        : 'url("/icons/arrow.svg")',
			'btn-arrow'    : 'url("/icons/purple-btn-arrow.svg")',
			'alt-btn-arrow': 'url("/icons/black-btn-arrow.svg")',
		},
		backgroundImage: {
			'role-gradient' : 'radial-gradient(50% 50% at 50% 50%, #E359FF 0%, #8655FF 100%)',
			'black-gradient': 'linear-gradient(180deg, rgba(10, 22, 40, 0) 0%, #0A1628 90%)',
		},
		maxWidth: {
      'wide-container': '1360px',
			'container'     : '1200px',
    },
  },
  plugins: [],
}
