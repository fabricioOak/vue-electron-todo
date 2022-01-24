<template>
  <div :class="`todo ${todo.done ? 'is-completed' : ''}`">
    <div>{{ todo.content }}</div>
    <div class="button">
      <button @click="toggleDone" class="px-2 mx-1 bg-green-400">
        {{ todo.done ? "Undo" : "Done" }}
      </button>
      <button @click="removeTodo" class="px-2 mx-1 bg-red-600 text-white">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDone() {
      this.$store.commit("toggleTodo", this.todo);
    },
    removeTodo() {
      this.$store.commit("removeTodo", this.todo);
    },
  },
};
</script>

<style lang="postcss" scoped>
.todo {
  @apply flex items-center justify-between bg-gray-800 p-4 rounded-lg mb-4;
}
.button {
  @apply text-white text-lg;
  min-width: fit-content;
}

.is-completed {
  @apply text-gray-400 line-through opacity-50;
}
</style>
