module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dela_gothic_one: ['Dela Gothic One', 'cursive'],
        dot_gothic_16: ['DotGothic16', 'sans-serif'],
        hachi_maru_pop: ['Hachi Maru Pop', 'cursive'],
        kaisei_tokumin: ['Kaisei Tokumin', 'serif'],
        kiwi_maru: ['Kiwi Maru', 'serif'],
        m_plus_1: ['M PLUS 1', 'sans-serif'],
        m_plus_rounded_1c: ['M PLUS Rounded 1c', 'sans-serif'],
        mochiy_pop_one: ['Mochiy Pop One', 'sans-serif'],
        noto_sans_jp: ['Noto Sans JP', 'sans-serif'],
        noto_serif_jp: ['Noto Serif JP', 'serif'],
        potta_one: ['Potta One', 'cursive'],
        rampart_one: ['Rampart One', 'cursive'],
        rocknroll_one: ['RocknRoll One', 'sans-serif'],
        sawarabi_mincho: ['Sawarabi Mincho', 'serif'],
        train_one: ['Train One', 'cursive'],
        yuji_syuku: ['Yuji Syuku', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
