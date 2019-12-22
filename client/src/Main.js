import React from "react";
import Todos from "./components/Todos";
import AddTodoForm from "./components/AddTodoForm";

class Main extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  /**
   * TODO: you can extract all the logic to call your todo api
   * in a different file. It doesn't need to be in the Main.js.
   * Create a file like api.js or something like this to extract all these
   * functions there.
   */

  getTodos = () => {
    fetch("http://localhost:3006/tasks")
      .then(res => res.json())
      .then(tasks => {
        this.setState({
          todos: tasks
        });
      });
    console.log(this.state.todos);
  };

  handleChange = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDelete = id => {
    const deleteTodoRequest = {
      method: "DELETE",
      body: JSON.stringify({
        id: id
      }),
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3006/tasks/${id}`, deleteTodoRequest)
      .then(res => res.json())
      .then(message => {
        /**
         * TODO: you should never call componentDidMount() directly.
         * This function shuold only be called by React itself.
         * If you need the logic inside componentDidMount, extract it in a different function.
         * In this case, you should call directly this.getTodos().
         */
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  addTodo = title => {
    const newTodo = {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false
      }),
      headers: { "content-type": "application/json" }
    };

    fetch("http://localhost:3006/tasks", newTodo)
      .then(res => res.json())
      .then(data => {
        /**
         * TODO: same comment, never call componentDidMount().
         */
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveRow = (id, task) => {
    const updateTasks = {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: task
      }),
      headers: { "content-type": "application/json" }
    };
    fetch(`http://localhost:3006/tasks/${id}`, updateTasks)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  render() {
    return (
      <div>
        <AddTodoForm addTodo={this.addTodo} />
        <Todos
          saveRow={this.saveRow}
          todos={this.state.todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Main;
