import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    loadTodos(state) {
      state.todos = JSON.parse(localStorage.getItem('todos')) || []
    },
    addTodo(state, todo) {
      state.todos = [{
        content: todo,
        createdAt: new Date().toLocaleDateString(navigator.l, { hour: '2-digit', minute: '2-digit' }),
        finishedAt: new Date().toLocaleDateString(navigator.l, { hour: '2-digit', minute: '2-digit' }),
        done: false
      }, ...state.todos]
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    removeAll(state) {
      state.todos = []
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    toggleTodo(state, todo) {
      todo.done = !todo.done,
        todo.done ? todo.finishedAt = new Date().toLocaleDateString(navigator.l, { hour: '2-digit', minute: '2-digit' }) : todo.finishedAt = ''
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
  },
  modules: {
  }
})
