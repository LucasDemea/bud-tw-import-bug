import colors from './colors.js';

const config = {
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
  theme: {
    extend: {
      colors: colors, // Extend Tailwind's default colors
    },
  },
  plugins: [],
};

export default config;
