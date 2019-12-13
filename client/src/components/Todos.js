import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Todos.css";
import pic from "./pic.jpg";

export class Todos extends Component {
  render() {
    return (
      <div style={backGroundPic}>
        {this.props.todos.map(todos => {
          return (
            <TodoList
              handleChange={this.props.handleChange}
              key={todos.id}
              todos={todos}
            />
          );
        })}
      </div>
    );
  }
}

const backGroundPic = {
  backgroundImage: `url(${pic})`,
  minHeight: "60vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "600px"
};
export default Todos;
