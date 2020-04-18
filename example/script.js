
const state = appletart.store({
  state: {
    content: "dos, tres"
  },
  builders: {
    list(state) {
      const list = state.content.replace(", ", ",").split(",")
      return list.reduce((acc, val) => {
        return acc + `<li>${val}</li>`
      }, "")
    }
  },
  actions: {
    setContent(state, el) {
      state.content = el.value
    }
  }
})