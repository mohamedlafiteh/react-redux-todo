import React, { Component } from "react";
import { Table, Button, Input, Checkbox } from "semantic-ui-react";

export class EditableRow extends Component {
  state = {
    completedEdit: this.props.completed,
    taskEdit: this.props.task
  };

  onChangeValue = e => {
    this.setState({
      [`${e.target.name}Edit`]: e.target.value
    });
  };
  saveChange = () => {
    this.props.saveRow(
      this.props.id,
      this.state.taskEdit,
      this.props.completedEdit
    );
  };
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.id}</Table.Cell>
        <Table.Cell>
          {" "}
          <Checkbox />
        </Table.Cell>
        <Table.Cell>
          <Input
            focus
            type='text'
            name='task'
            value={this.state.taskEdit}
            onChange={this.onChangeValue}
          />
        </Table.Cell>
        <Table.Cell>
          {" "}
          <Input
            type='text'
            name='completed'
            value={this.state.completedEdit}
            onChange={this.onChangeValue}
          />
        </Table.Cell>
        <Table.Cell>Delete</Table.Cell>
        <Table.Cell>
          <Button primary onClick={this.saveChange}>
            Save
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default EditableRow;
