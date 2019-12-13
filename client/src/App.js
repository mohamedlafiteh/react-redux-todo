import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }
  getTodos = () => {
    fetch("http://localhost:3006/tasks")
      .then(res => res.json())
      .then(tasks => {
        this.setState({
          todos: tasks
        });
      });
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
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Todos
          todos={this.state.todos}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
