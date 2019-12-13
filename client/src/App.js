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
  render() {
    return (
      <div>
        <Navbar />
        <Todos todos={this.state.todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
