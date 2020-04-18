
const state = appletart.store({
  state: {
    content: "one",
    searchResults: []
  },
  builders: {
    list(state) {
      const list = state.content.replace(", ", ",").split(",")
      let result = ""
      list.forEach(item => {
        result += `<li>${item}</li>`
      });
      return result
    }
  },
  actions: {
    setContent(state, event) {
      state.content = event.target.value
    }
  }
})

state.searchResults = ["One", "Twos"]