const kakuJoshi = ['が', 'の', 'を', 'に', 'へ', 'で', 'と', 'や']

const setsuzokuJoshi = ['ば', 'と', 'し', 'て']

const fukuJoshi = ['は', 'も', 'か']

const shuJoshi = ['な', 'ね', 'ぞ', 'よ', 'わ']

const joDoushi = ['れ', 'せ', 'ね', 'た', 'だ', 'う']

const specific = ['.', ',', '。', '、', '「', '」', '\n']

export const stopWords = [
  ...kakuJoshi,
  ...setsuzokuJoshi,
  ...fukuJoshi,
  ...shuJoshi,
  ...joDoushi,
  ...specific,
]
