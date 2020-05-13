

// const store = appletart.createStore({
//   value: "one"
// })


// appletart.listen(store.value, (newValue, oldValue) => {
//   console.log(`Changed from ${oldValue} to ${newValue}`)
// })

// const form = appletart.createPlugin(({ items }, { formName, onValidSubmit }) => {
  
// })

// appletart.createController(({ state, extend, items, on }) => {
//   extend(form, {
//     formName: 'project',
//     onValidSubmit: (project) => createProject(project)
//   })

//   on({
//   })

//   function createProject(projectParams) {

//   }

//   // const state = {
//   //   email: ''
//   // }

//   // bind(items.input, state.email)
// })

installPlugin({

  onControllerInit(controllerContext) {

    
    
    return controllerContext
  }
  
})





// console.log(appletart)

// const store = new appletart.Store({
//   state: {
//     content: null,
//     data: {
//       sub: null,
//       list: []
//     }
//   },
//   builders: {
//     addWelcome(state) {
//       return `Welcome ${state}`
//     }
//   },
//   actions: {
//     setContent(state, event) {
//       state.content = event.target.value
//     }
//   }
// })

// const store = new appletart.Store({
//   state: {
//     content: null,
//     data: {
//       sub: null,
//       list: []
//     },
//     someClass: ''
//   }
// })

// appleTart.run(Searchbar, ["#id"])
// const searchbar = new Searchbar();
// console.log(searchbar.test)

// appletart("#search", (dom) => {
//   dom.textbox.on("input", (event) => {
//     dom.searchResults.innerHTML = "Test"
//   })
// })

// appletart({
//   state: {

//   },
//   "textbox.input"() {

//   }
// })

// appletart({
//   query: ""
// }, bindActions, bindReactions)

// const searchbar = new Appletart("#searchbar");

// searchbar.el("textbox").on("input", (event) => {
//   searchbar.emit("queryUpdated", event.target.value);
// });

// searchbar.on("queryUpdated", (value) => {
//   searchbar.el("result").innerHTML = value
// })

//---------------------

// const searchbar = new Appletart("#searchbar", {
//   queryUpdated(value) {
//     dom.byName("result").innerHTML = "value"
//   }
// })


// const state = new Store({
//   query: ""
// })

// const dom = function(one, two) {
//   const newDom = "new"
//   two(newDom)
// }

// console.log("OuterDom:", dom)
// dom("#searchbar", (dom) => {
//   dom(":textbox").on("input", (event) => {

//   })
// })

// function createController(name, callback) {}

// createController("search", (items) => {
//   items.textbox.on("input", async (event) => {
//     const query = event.target.value
//     const results = await findItems(query)
//     const HTMLResults = results.map(r => `<li>${r}</li>`)
//     items.result.innerHTML = HTMLResults
//   })
// });

// async function findItems(query) {
//   return ["one", "two", "three"]
// }

// (() => {

//   const searchbar = document.querySelector("#searchbar")
//   if (searchbar == null) return

//   const inputEl = searchbar.querySelector("#input")
//   const resultsEl = searchbar.querySelector("#results")

//   inputEl.addEventListener("input", (e) => {
//     const results = findResults(query)
//     const resultsHTML = results.map(r => `<li>${r}</li>`).join("")
//     resultsEl.innerHTML = resultsHTML
//   })

// })()

// const { state } = appletart.createStore({
//   sidebarOpen: false
// })

// function dropDown({ state, listen, on, items }, dropdownItemName) {
// }

// const plugin = createPlugin(({ state, listen, on, items }, params) => {

// })

// const controller = appletart.createController("search", ({ state, listen, on, items, plugin }) => {
//   plugin(plugin, item)
  
//   on({
//     updateResults: (event) => updateResults(event.target.value),
//     visitLink: (event) => visitLink(event.target.innerText),
//     clickOutside: (event) => hide()
//   })

//   function updateResults(value) {
//     const newResults = searchResults(value)
//     items.results.innerHTML = newResults.map((r, i) => `
//       <li data-item="result.${i}" data-on:click="visitLink">
//         ${r}
//       </li>
//     `).join("")
//     console.log(items)
//   }

//   function visitLink(value) {
//     console.log("Visiting:", value)
//   }

//   function hide() {
//     console.log("Hidded")
//   }
// })

// function searchResults(query) {
//   if (query.length >= 10) return []
//   let result = []
//   for (let i = 0; i < 10 - query.length; i++) {
//     result.push(`Result ${i}`)
//   }
//   return result
// }




// const store = appletart.Store({
//   sidebarOpen
// })

// listen("sidebarOpen")

// Target a specific piece of html


// const controller = createController("search", function (state, items, on) {
//   // on("updateResults", (event) => updateResults(event.target.value))
//   // on("slashPressed", () => focus())
//   on({
//     updateResults: (event) => updateResults(event.target.value)
//   })

//   state.watch("sidebarOpen", (oldValue, newValue) => {

//   })

//   function updateResults(newQuery) {
//     if (newQuery.length > 0) {
//       const results = findResults(event.target.value)
//       const resultsHTML = results.map(r => `<li>${r}</li>`).join("")
//       items.results.innerHTML = resultsHTML
//       controller.querySelectorAll(".results").forEach(el => {
//         el.innerHTML = ""
//       })
//       showResults()
//     } else {
//       hideResults()
//     }
//   }

//   function hideResults() {
//     items["results"].classList.add("visible")
//   }

//   function showResults() {
//     items["results"].classList.remove("visible")
//   }

//   function focus() {
//     items["input"].focus()
//   }
// }, state)

// document.addEventListener("keypress", e => {
//   if (e.key === "/") {
//     controller.throwEvent("slashPressed")
//   }
// })

// const store = new appletart((items, bind, on, store) => {

//   // let state = store({
//   //   query: "",
//   //   loading: false
//   // })

//   // bind("button", state.loading, (state, el) => {
//   //   if (state.loading) {
//   //     el.innerHTML = "Loading"
//   //   }
//   // })

//   on("button", "click", (event) => {

//   })

//   on("submitForm", (event) => {

//   })
  
// })


// appletart.createStore({

// })


// "grapestore"
// "grapedom"

// const store = new appletart.Store({
//   state: {
//     query: ''
//   },
//   binds: {
//     renderTitle(state, element) {
//       element.innerHTML = `Hello ${state.query}`
//     }
//   },
//   events: {
//     inputChanged(state, event) {

//     }
//   }
// })

// const {el, bind, state} = new appletart.Store({
//   query: null
// })

// el("title", (element) => {
//   element.innerHTML = state.query
// })

// store.bind("query", () => {
//   store.el("title").innerHTML = "Something new";
// });

// store.on("textbox", "input", (event) => {
//   store.el("title").innerHTML = "Something new";
// });

// store.el("title", (el) => {
//   el.innerHTML = "Something"
// })



// store.state.content = "test"
// console.log(store.state.content)
// const state = store.state

// state.data.sub = "test"
// state.data.sub = "test2"
// state.data.list.push("test")
// state.content = "test"

// store.state.content = "Yus!"

// store.state.data.sub = "Wow!"
// console.log(store.state)
// store.state.data.sub = "test"
