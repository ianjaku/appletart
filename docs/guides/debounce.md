---
category: "Guides"
title: "Debounce"
---

# Debounce

The lodash debounce function is included added in the library for your convenience.

Example usage:

```js
createController("tutorial", ({ on }) => {
  on({
    // wrap your event handler in debounce (this doesn't only work in event handlers)
    buttonPressed: appletart.debounce((event) => updateResults(), 250)
  })

  function updateResults() {
    // Implement the update results function
  }
})
```

For more information check out the [lodash docs](https://lodash.com/docs/4.17.15#debounce)