# Icons

This app demonstrates how to load MDI icons (https://pictogrammers.com/library/mdi/) without loading the entire library as a webfont, which **dramatically** reduces chunk size at build.

Key files to look at:
- `package.json` - Note that we use `@mdi/js`. Also, be sure to use `vite-plugin-vuetify` from the start.
- `vite.config.js` - Vuetify is used here too.
- `main.js` where you pull plugins (Vuetify only in this app) into the Vue app
- `icons.js` where you import the icons and map their names to their SVG path names
- `plugins/vuetify.js` where you set up the icons


This app also contains a composable that uses the web speech api to make a simple speech recognition app, implemented in `App.vue`.

I also use it to experiment with `Vuetify 4` and `Vue Router 5`.