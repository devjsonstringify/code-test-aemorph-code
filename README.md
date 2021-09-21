# To do
1. The three dots on the menu are shifted to the top, you need to center them.
2. When clicking the three dots, you can see that all hidden items fade in together. They need to fade in in a sequence, like in apple.com when you click the search button. That is, they must show up one by one, not all together.
3. You can see that the project uses jQuery. You need to refactor the js to get rid of jquery and make sure that everything still works.



---

### Installation

Project requires Yarn.

Clone the repo and do do `yarn install`.


### Start Dev Server

To start the local server and edit the website, do `yarn start`.


### Build Prod Version

When finished, do `yarn run build` to compile everything.
```

---

When you run `yarn run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
