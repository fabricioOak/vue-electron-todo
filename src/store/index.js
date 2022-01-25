import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    time: new Date().toLocaleDateString('pt-br')
  },
  mutations: {
    loadTodos(state) {
      state.todos = JSON.parse(localStorage.getItem('todos')) || []
    },
    addTodo(state, todo) {
      state.todos = [{ content: todo, time: state.time, done: false }, ...state.todos]
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
      todo.done = !todo.done
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  },
  actions: {
  },
  modules: {
  }
})
