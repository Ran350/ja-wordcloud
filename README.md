<div align="center">

# [Japanese WordCloud](https://ran350.github.io/ja-wordcloud/)

![Deploy](https://github.com/Ran350/ja-wordcloud/workflows/Deploy/badge.svg)
![Code Check](https://github.com/Ran350/ja-wordcloud/workflows/Code%20Check/badge.svg)

</div>

## Development

### Preparation

```
git clone <this repo>
cd <this repo>
yarn install
```

### Commands

See `scripts` section of [package.json](./package.json)

## Acknowledgements

### WordCloud

This app generate the WordCloud by [wordcloud2.js](https://wordcloud2-js.timdream.org/#love).

### Morphological segmentation

This app split the sentence into morphemes by [TinySegmenter](http://chasen.org/~taku/software/TinySegmenter/).
TinySegmenter is an extremely compact Japanese segmentation software written only in Javascript.
It segments with only machine learning and without using a dictionary of words.

## TODO

See [issue](https://github.com/Ran350/ja-wordcloud/issues).
