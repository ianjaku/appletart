---
category: "Guides"
title: "File structure"
---

Once your project becomes big enough you can start thinking about file structure.
Because even with good standards, you'll need to split into different files eventually.

Our recommended way to set up your file system is.

```js
// appletart controllers
/controllers
// appletart plugins
/plugins
// common helper modules
// if you use a simple function a lot, put it here
/helpers
// if you phoenix, modules are like phoenix contexts.
// otherwise, place a js file with the name of your module
// (ex: search.js) in the modules folder
// then place a folder with the same name "search" in the
// modules directory. All files that search.js needs to work
// will go in the search folder.
/modules
// appletart store
store.js
// Entry file
app.js
```
