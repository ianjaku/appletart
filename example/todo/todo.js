const store = new appletart.Store({
  state: {
    inputValue: '',
    todos: []
  },
  builders: {
    todoList(state) {
      return state.todos.reduce((res, val, index) => {
        return `
          ${res}
          <li
            data-action
            data-on-click="deleteItem"
            data-bind="inputValue"
            data-index="${index}"
          >
            ${val}
          </li>
        `
      }, "")
    },
    title(state) {
      const length = state.todos.filter(t => t != null).length
      let result = ''
      result += length
      result += ' TODO'
      if (state.todos.length !== 1) {
        result += 'S'
      }
      return result
    }
  },
  actions: {
    setInputValue(state, event) {
      state.inputValue = event.target.value;
    },
    createTodo(state, event) {
      state.todos.push(state.inputValue)
      state.inputValue = ""
    },
    deleteItem(state, event) {
      const index = event.target.dataset.index
      state.todos = state.todos.filter((v, i) => i != index)
    }
  }
});

let values = []
for (var i = 0; i < 10; i++) {
  values.push("Value: " + i)
}
store.state.todos = values
