const app = new Vue({
  el: '#app',
  data: {
    // 使用するデータ
    newItem: "",
    todos: [],
  },

  methods: {
    // 使用するメソッド
    addTodo: function () {
      //空白だったら追加しない
      if (this.newItem == "") return;
      let todo = {
        item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);
      this.newItem = "";
    },

    deleteTodos: function (index) {
      this.todos.splice(index, 1)
    }
  }
})
