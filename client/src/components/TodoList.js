import React, { Component } from "react";
import "./TodoList.css";
import { Table, Button, Checkbox } from "semantic-ui-react";

export const TodoList = ({
  id,
  title,
  editRow,
  handleChange,
  completed,
  handleDelete
}) => {
  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>
        {/**
         * TODO: if the todo is completed, the checkbox should also be checked by default
         * So you probably need to use the completed variable in the Checkbox component below.
         */}
        <Checkbox onClick={() => handleChange(id)} />
      </Table.Cell>
      <Table.Cell
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </Table.Cell>
      <Table.Cell>
        <Button primary onClick={() => editRow(id)}>
          Edit
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button onClick={() => handleDelete(id)} primary>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TodoList;
