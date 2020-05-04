---
category: "Guides"
title: "Plugins"
---

# What are plugins

Plugins are recurring pieces of code that span between different controllers.
Dropdown functionality can be a plugin.

# How to create a plugin

To create a plugin, simple call the **createPlugin** function that appletart exports.

It gets 2 parameters.

1. The controller context where controller gets installed
2. The parameters given to the plugin() function when installing the plugin

```js
const myPlugin = appletart.createPlugin({ state, on, items, listen, plugin }, params) {
  // Your plugin goes here, just like in the controller
  // This function gets called whenever the plugin gets installed.
})
```

# How to use a plugin

The controller context exports a function called **plugin**. This function takes 2 parameters.

1. The plugin (returned from appletart.createPlugin())
2. The data you want to pass to the plugin

```js
appletart.createController({ on, items, plugin }) {
  plugin(myPlugin, "some data")
})
```

# Nested plugins

Plugins can also take plugins in the same way that controllers use plugins.
You can just keep nesting away as much as you want.
