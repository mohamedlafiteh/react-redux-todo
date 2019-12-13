import React, { Component } from "react";
import "./TodoList.css";
import { Button } from "semantic-ui-react";

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

        <p style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}>
          {title}
        </p>

        <Button
          primary
          onClick={this.props.handleDelete.bind(this, id)}
          className='btn'
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default TodoList;
