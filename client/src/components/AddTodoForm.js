import React, { Component } from "react";

export class AddTodoForm extends Component {
  state = {
    title: ""
  };
  handleNewTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.title}
          onChange={this.handleNewTitleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddTodoForm;
