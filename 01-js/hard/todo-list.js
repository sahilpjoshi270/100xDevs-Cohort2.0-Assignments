/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

// Testing the Todo class
const todoList = new Todo();

todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

console.log("Initial Todo List:", todoList.getAll());

todoList.update(1, "Updated Task 2");
console.log("Updated Todo List:", todoList.getAll());

todoList.remove(0);
console.log("Todo List after removing task at index 0:", todoList.getAll());

console.log("Todo at index 1:", todoList.get(1));

todoList.clear();
console.log("Cleared Todo List:", todoList.getAll());

module.exports = Todo;
