### Installation

Project requires Yarn.

```
yarn install
```

### Start Dev Server

```
yarn start
```

### Build Prod Version

```
yarn run build
```

---

When you run `yarn run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
