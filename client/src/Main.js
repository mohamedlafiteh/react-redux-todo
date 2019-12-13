import React from "react";
import Todos from "./components/Todos";
import AddTodoForm from "./components/AddTodoForm";

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

  addTodo = title => {
    console.log(title);
    const newTodo = {
      method: "POST",
      body: JSON.stringify({
        title: title,
        completed: false
      }),
      headers: { "content-type": "application/json" }
    };
    console.log(newTodo);
    fetch("http://localhost:3006/tasks", newTodo)
      .then(res => res.json())
      .then(data => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <AddTodoForm addTodo={this.addTodo} />
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
