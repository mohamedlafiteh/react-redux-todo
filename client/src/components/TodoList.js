import React, { Component } from "react";
import "./TodoList.css";

export class TodoList extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      textDecoration: this.props.todos.completed ? "line-through" : "none"
    };
  };
  render() {
    const { id, title } = this.props.todos;
    return (
      <div style={this.getStyle()}>
        <input
          type='checkbox'
          onChange={this.props.handleChange.bind(this, id)}
        />
        <p>{title}</p>
        <button className='btn'>Delete</button>
      </div>
    );
  }
}

export default TodoList;
