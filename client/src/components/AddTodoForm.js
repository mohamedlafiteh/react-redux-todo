import React, { Component } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

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
        <Input
          type='text'
          value={this.state.title}
          onChange={this.handleNewTitleChange}
          placeholder='Add a new todo ...'
        />
        <Button primary>Submit</Button>
      </form>
    );
  }
}

export default AddTodoForm;
