
console.log(appletart)

const store = new appletart.Store({
  state: {
    content: null,
    data: {
      sub: null,
      list: []
    }
  },
  builders: {
    addWelcome(state) {
      return `Welcome ${state}`
    }
  },
  actions: {
    setContent(state, event) {
      state.content = event.target.value
    }
  }
})

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
