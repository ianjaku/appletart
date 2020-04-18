
const state = appletart.store({
  state: {
    content: "dos, tres",
    searchResults: [
      "dos", "tres"
    ]
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
    setContent(state, el) {
      state.content = el.value
    }
  }
})