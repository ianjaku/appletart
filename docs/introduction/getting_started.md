---
category: "Introduction"
title: "Getting started"
---

# Installation

There are 3 ways to install appletart

## NPM

Our package is live on NPM under the name "appletart"

```
npm i appletart
```

## CDN

Gendocs is also hosted on our CDN at [https://invacto-general.fra1.cdn.digitaloceanspaces.com/appletart.js](https://invacto-general.fra1.cdn.digitaloceanspaces.com/appletart.js)

## Raw

You can find the raw content of the library on [github](https://github.com/invacto/appletart/blob/master/dist/appletart.js)

Just add this code to your project and you're ready to go!

# Concepts

There are **2** important **concepts**.

## Controller

The controller handles a piece of content on your site.
You would make a controller for a searchbar, sidebar, menu, ...

The most important part of the controller is that it takes a piece of HTML and doesn't care about anything else.

## Store

Think of the store as **reactive global state**.
It connects all controllers together.

A big usecase for the store is a hamburger menu.
You put the state of your hamburger menu in the store and all controllers can listen and react to it.

# Usage

Let's make a simple to-do application to showcase appletart.

## Your first controller

let's start with some simple HTML

```html
<div data-controller="todo">

  <input type="text">

  <ul>
    <li>Todo1</li>
    <li>Todo2</li>
    <li>Todo3</li>
  </ul>

</div>
```

```js
// don't need this line when using the CDN
import appletart from 'appletart'

appletart.createController("todo", () => {
  // Your controller code goes here
})
```

We start by adding the **"data-controller"** attribute.
This will make sure that this piece of html will get handled by the "todo" controller.

```info
You can not nest controllers, think of controller blocks as BEM blocks.
```

## Defining items

Items are HTML Elements. Every item that appletart needs to know needs the **data-item** tag.

If you want to be able to target this element later, you also have to give it a name.
ex: **data-item="someName"**

Lets name our items.

```html
<div data-controller="todo">

  <input type="text" data-item="input">
  <button data-item>Add todo</button>

  <ul data-item="todoList">
    <li>Todo1</li>
    <li>Todo2</li>
    <li>Todo3</li>
  </ul>

</div>
```

We can now reach our items from inside our controller.
The button can't be reached, but that's fine. We don't need to reach it and we can always add it later.

Let's try to set the value of our input.

```js
// don't need this line when using the CDN
import appletart from 'appletart' 

appletart.createController("todo", ({ items }) => {

  items.input.value = "Some value"
  
})
```

## Throwing events

We need to add a todo item, whenever someone presses the button.

In appletart we use the **data-on:** attribute to throw a controller event when a javascript event gets thrown.

So lets detect a button press.

```html
<div data-controller="todo">

  <input type="text" data-item="input">
  <button data-item data-on:click="buttonClicked">Add todo</button>

  <ul data-item="todoList">
    <li>Todo1</li>
    <li>Todo2</li>
    <li>Todo3</li>
  </ul>

</div>
```

```js
// don't need this line when using the CDN
import appletart from 'appletart'

appletart.createController("todo", ({ items, on }) => {
  on({
    buttonClicked: (event, element) => addTodo()
  })

  function addTodo() {

  }
})
```

the on function takes an object with the event name as key and the event handler as value.
Every event also receives the event and the html element of the event.

This way of handling events adds some structure and makes the event flow much cleaner.

Let's also get the content of the input and add a todo.

```js
// don't need this line when using the CDN
import appletart from 'appletart' 

appletart.createController("todo", ({ items, on }) => {
  on({
    buttonClicked: (event, element) => addTodo()
  })

  function addTodo() {
    // Get the text from the input field
    const text = items.input.value

    // Create the li tag
    const textNode = document.createTextNode(text)
    const liNode = document.createElement("li")
    liNode.appendChild(textNode)

    // Add the liNode to the end of the todoList <ul>
    items.todoList.appendChild(liNode)
  }
})
```

You can now add items to your todolist.

We can't obviously just keep adding todo's to our application.
In some rare moments, we tend to get some work done.
That's why we need to be able to remove items from our todo.

## Dynamic indexing

Whenever you add nodes or remove them, appletart will look for data-item tags to index those nodes.

This means that we can add a **data-on:click** attribute to our newly created liNodes to remove them again.

```js
// don't need this line when using the CDN
import appletart from 'appletart' 

appletart.createController("todo", ({ items, on }) => {
  on({
    buttonClicked: (event, element) => addTodo(),
    removeItem: (event, element) => removeItem(element)
  })

  function removeItem(item) {
    items.todoList.removeChild(item)
  }

  function addTodo() {
    // Get the text from the input field
    const text = items.input.value

    // Create the li tag
    const textNode = document.createTextNode(text)
    const liNode = document.createElement("li")
    // Add the data-item="" and data-on:click="removeItem" attributes
    liNode.setAttribute("data-item", "")
    liNode.setAttribute("data-on:click", "removeItem")
    liNode.appendChild(textNode)

    // Add the liNode to the end of the todoList <ul>
    items.todoList.appendChild(liNode)

  }
})
```

We can now remove items from our todo by clicking on them.

## Controller element

It's possible to get the controller element itself as well.
It gets passed as the **controllerEl** key in the controller.

```js
appletart.createController("tutorial", ({ controllerEl }) => {
  controllerEl.innerHTML = "Controller content"
})
```

## State

We can also put our todo's in our global state so other controllers can use it as well.
Maybe you have a toolbelt controller, or something simular.

```info
State has to be defined before making your first controller!
```

```js
import appletart from 'appletart'

appletart.createStore({
  todos: []
})

// Your controller definition goes here
```

Let's now listen to changes and render that state in our controller.

```js
// don't need this line when using the CDN
import appletart from 'appletart' 

appletart.createController("todo", ({ state, listen, items, on }) => {
  on({
    buttonClicked: (event, element) => addTodo(),
    removeItem: (event, element) => removeItem(element)
  })

  listen("todos", (newValue, oldValue) => {
    renderTodos(newValue)
  })

  function removeItem(item) {
    items.todoList.removeChild(item)
  }

  function addTodo() {
    const text = items.input.value
    state.todos.push(text)
  }

  function renderTodos(todos) {
    const todosHTML = todos.map(t => `<li data-item data-on:click="removeItem">${t}</li>`).join("")
    items.todoList.appendChild(todosHTML)
  }
})
```

And that's our todo. There is still some optimization possible but it's definitely not a bad app at all! :)

```info
You can also use the listen comand that the store returns to listen to state changes outside of your app.
```

## clickOutside

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

## Debounce

The lodash debounce function has been added to the library for your convenience.

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
