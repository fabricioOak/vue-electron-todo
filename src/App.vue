<template>
  <main class="w-full h-screen flex flex-col items-center pt-16" id="app">
    <h1 class="text-4xl capitalize mb-2">To do list</h1>
    <p class="mb-8">What do you need to do?</p>
    <div class="flex justify-center items-center max-w-lg">
      <input
        class="border-white bg-gray-800 text-center rounded text-white text-2xl py-2 m-0 focus:outline-none"
        type="text"
        v-model="newTodo"
        placeholder="Add a new to do"
        @keyup.enter="addTodo"
      />
      <button class="button bg-green-400" @click="addTodo">Add</button>
    </div>
    <div class="w-full max-w-2xl mt-8">
      <Todo
        v-for="(todo, index) in $store.state.todos"
        :key="index"
        :todo="todo"
      />
    </div>
  </main>
</template>

<script>
import Todo from "./components/Todo.vue";
export default {
  name: "IndexPage",
  components: {
    Todo,
  },
  data() {
    return {
      newTodo: "",
    };
  },
  created() {
    this.$store.commit("loadTodos");
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$store.commit("addTodo", this.newTodo);
        localStorage.setItem("todos", JSON.stringify(this.$store.state.todos));
        console.log(this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>

<style lang="postcss">
.button {
  @apply appearance-none border-none outline-none font-bold text-black text-2xl py-2 px-4 rounded-lg ml-2 cursor-pointer;
}
</style>
