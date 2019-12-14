import React, { Component } from "react";
import "./TodoList.css";
import { Table, Button, Checkbox } from "semantic-ui-react";

export const TodoList = ({ id, title, editRow, handleChange, completed }) => {
  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>
        {" "}
        <Checkbox onClick={() => handleChange(id)} />
      </Table.Cell>
      <Table.Cell
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </Table.Cell>

      <Table.Cell>Delete</Table.Cell>
      <Table.Cell>
        <Button primary onClick={() => editRow(id)}>
          Edit
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TodoList;
