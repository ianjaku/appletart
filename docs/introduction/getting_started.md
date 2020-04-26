---
category: "Introduction"
title: "Getting started"
---

<div id="example">

  <h2 data-bind="name" data-builder="welcome"></h2>
  <p>
    Have a look at what we're building
  </p>
  <input
    data-action="input.setName"
    data-init
    type="text"
    value="Stranger"
    style="width: 100%; padding: 15px 25px; border-radius: 4px; font-family: Helvetica, sans-serif; outline: none; border: 1px solid #CCC; box-shadow: none; margin-top: 10px;"
  >
</div>

<script src="https://invacto-general.fra1.cdn.digitaloceanspaces.com/appletart/appletart.js"></script>
<script>
  appletart.Store({
    state: {
      name: "Stranger"
    },
    builders: {
      welcome(state) {
        return `Welcome ${state.name}!`
      }
    },
    actions: {
      setName(state, sourceEl) {
        state.name = sourceEl.value
      }
    }
  }, "#example")
</script>

# Installation

There are currently 2 ways to install appletart.

## 1. NPM

Our package is live on NPM under the name "appletart"

```
npm i appletart
```

## 2. Raw

You can find the raw content of the library in **dist/appletart.js**

Just add this code to your project and you're ready to go!

# Creating your first store

appletart is designed so that you can make your code as modular as possible.

You can set up a store for your search, validation, list rendering, ...

A **VERY** basic store.
```javascript
const { state } = appletart.Store({
  state: {
    name: null
  }
}, "#tutorial")
```

Now we can bind to this state in our HTML.

```html
<div id="#tutorial">
  <h1 data-bind="name">Name</h1>
</div>
```

Lets now change this content!

```javascript
state.name = "Stranger"
```

You can now see the state update!

# Actions

We can now manipulate our DOM, but we can't react to any events.

That's where actions come in. **actions are eventListeners** which listen to certain pieces of your html.

Lets create our action.

In our **JS**
```javascript
const { state } = appletart.Store({
  state: {
    anme: null
  },
  actions: {
    setName(state, sourceElement) {
      state.name = sourceElement.value
    }
  }
}, "#tutorial")
```

To make our event listener listen to our input, we use the **data-action** tag.

In our **HTML**
```html
<div id="#tutorial">
  <h1 data-bind="name">Stranger</h1>
  <input data-action="input.setName" type="text" />
</div>
```

**data-action** takes the event and the action name as parameters separated by a "."

In the above case we're listening to the "input" event and calling the "setContent" action whenever it's called.

Now run your application and type something in the input box.


# Builders

We're now able to listen to events and update our DOM.
But we obviously don't want to put HTML in our store, so how do we add HTML to the DOM?

That's where Builders come in. **They transform the state to HTML** before updating the DOM.

Lets make an example:

```javascript
const { state } = appletart.Store({
  state: {
    content: null
  },
  builders: {
    welcome(state) {
      return `Welcome ${state.name}!`
    }
  }
  actions: {
    setContent(state, sourceElement) {
      state.name = sourceElement.name
    }
  }
}, "#tutorial")
```

We can use this builder with the **data-builder** tag.

```html
<div id="#tutorial">
  <h1 data-bind="name" data-builder="welcome"></h1>
  <input data-action="input.setName" type="text" />
</div>
```

You can now see that the h1 has an anchor tag inside of it linking to google.

# Init

<!-- There are two ways to get some initial state on page load. -->

<!-- ## 1. Adding content to the store

When initalising your store, just add a value other than **null** or **undefined**

```javascript
const { state } = appletart.Store({
  state: {
    name: "Initial value"
  }
}, "#tutorial")
``` -->

<!-- ## 2. Adding data-init next to your data-action -->

If you add **data-init** to a tag that also has **data-action** then the action will be called on store initialisation.

Just like the previous example:

```html
<div id="#tutorial">
  <h1 data-bind="name" data-builder="welcome"></h1>
  <input data-init data-action="input.setName" type="text" value="Stranger" />
</div>
```

In the above case "setContent" will be called when the store gets initialised.
