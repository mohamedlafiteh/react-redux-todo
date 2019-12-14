import React, { Component } from "react";
import TodoList from "./TodoList";
import "./Todos.css";
import pic from "./back.jpeg";
import EditableRow from "./EditableRow";
import { Table } from "semantic-ui-react";

export class Todos extends Component {
  state = {
    selectedId: null
  };
  editRow = id => {
    this.setState({ selectedId: id });
  };
  saveRow = (id, task) => {
    console.log(id, task);
  };
  render() {
    return (
      <Table celled inverted style={backGroundPic}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Task</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.todos.map(todos => {
            if (todos.id === this.state.selectedId) {
              return (
                <EditableRow
                  saveRow={this.saveRow}
                  id={todos.id}
                  task={todos.task}
                  completed={todos.completed}
                  key={todos.id}
                />
              );
            } else {
              return (
                <TodoList
                  editRow={this.editRow}
                  key={todos.id}
                  id={todos.id}
                  title={todos.title}
                  completed={todos.completed}
                />
              );
            }
          })}
        </Table.Body>
      </Table>
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

//   <Table.Body>
//     <Table.Row>
//       <Table.Cell>John</Table.Cell>
//       <Table.Cell>Approved</Table.Cell>
//       <Table.Cell textAlign='right'>None</Table.Cell>
//     </Table.Row>
//     <Table.Row>
//       <Table.Cell>Jamie</Table.Cell>
//       <Table.Cell>Approved</Table.Cell>
//       <Table.Cell textAlign='right'>Requires call</Table.Cell>
//     </Table.Row>
//     <Table.Row>
//       <Table.Cell>Jill</Table.Cell>
//       <Table.Cell>Denied</Table.Cell>
//       <Table.Cell textAlign='right'>None</Table.Cell>
//     </Table.Row>
//   </Table.Body>
