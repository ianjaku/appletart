---
category: "Guides"
title: "Click outside"
---

# clickOutside

One last thing, which you don't need for a todo application but is always nice is clickOutside.
If you want to detect when the user clicks outside of your item just use the clickOutside event.

Example:

```html
<div data-controller="test" data-on:clickOutside="clickedOutside">
  <h1 data-item="title"></h1>
</div>
```

```js
createController("test", ({ items, on }) => {
  on({
    clickedOutside() {
      items.title = "Clicked outside"
    }
  })
})
```

```info
Feel free to make an issue on the github repo if you have any doubts.

(https://github.com/invacto/appletart)[https://github.com/invacto/appletart]
```