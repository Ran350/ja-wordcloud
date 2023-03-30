<div align="center">

# [Web WordCloud](https://ran350.github.io/ja-wordcloud/)

![Deploy](https://github.com/Ran350/ja-wordcloud/workflows/Deploy/badge.svg)
![Code Check](https://github.com/Ran350/ja-wordcloud/workflows/Code%20Check/badge.svg)

</div>

## Develop

### Requirements

- [Node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/)

### Dependencies

See [package.json](./package.json) & [Cargo.toml](./src/lib/tokenizer/Cargo.toml).

### Preparation

```sh
git clone <this repo>
cd <this repo>
yarn install
```

### Build

```sh
yarn wasm
yarn dev
```

### Commands

See `scripts` section of [package.json](./package.json)

- `yarn wasm` - runs `wasm-pack build`
- `yarn dev` - runs `yarn build` & `yarn run`
- `yarn build && yarn export` - exports HTML files and others in `./out`
- `yarn run check` - checks with code formatting with Prettier, type checking with tsc, linting with ESLint

## Continuos Integrations (CI)

See [.github/workflows/code-check.yml](./.github/workflows/code-check.yml)

This workflows runs `yarn install && yarn wasm && yarn run check` in pushing/PR on `main` branch.

## Continuous Delivery (CD)

See [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

This workflows runs `yarn install && yarn wasm && yarn build && yarn export` in pushing/PR on `main` branch, then deploys using GitHub Pages.

## TODO

See [issue](https://github.com/Ran350/ja-wordcloud/issues).
