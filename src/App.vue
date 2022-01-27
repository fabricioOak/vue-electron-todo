<template>
  <div class="h-screen">
    <header class="pr-4 pt-4 text-right w-full">
      <p class="text-xl text-gray-400">
        Made by
        <a
          class="text-gray-300"
          target="__blank"
          href="https://github.com/fabricioOak"
          >fabricioOak</a
        >
      </p>
    </header>
    <main
      class="transition-all duration-200 w-full flex flex-col items-center pt-16"
      id="app"
    >
      <div>
        <img src="../public/favicon.svg" alt="" />
        <h1 class="text-4xl capitalize mb-2">To do list</h1>
      </div>
      <p class="mb-8">What do you need to do?</p>
      <div
        class="flex flex-col justify-center items-center max-w-xl sm:flex-row"
      >
        <input
          class="focus:placeholder-transparent border-white bg-gray-800 text-center rounded text-white text-2xl py-2 m-0 focus:outline-none"
          type="text"
          v-model="newTodo"
          placeholder="Add a new to do"
          @keyup.enter="addTodo"
        />
        <button
          class="transition-all duration-200 button sm:mt-0 mt-4 text-white hover:bg-green-600 bg-green-400"
          @click="addTodo"
        >
          Add
        </button>
        <button
          class="transition-all duration-200 button sm:mt-0 mt-4 text-white hover:bg-yellow-600 bg- bg-yellow-500"
          @click="removeAll"
        >
          Remove all
        </button>
      </div>
      <div class="w-11/12 min-w-min max-w-2xl mt-8">
        <Todo
          v-for="(todo, index) in $store.state.todos"
          :key="index"
          :todo="todo"
        />
      </div>
    </main>
  </div>
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
      if (this.newTodo && this.newTodo.trim()) {
        this.$store.commit("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
    removeAll() {
      this.$store.commit("removeAll");
    },
  },
};
</script>

<style lang="postcss">
.button {
  @apply appearance-none border-none outline-none font-bold text-black text-2xl py-2 px-4 rounded-lg ml-2 cursor-pointer;
}
</style>
