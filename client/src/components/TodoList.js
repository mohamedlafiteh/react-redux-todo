import React, { Component } from "react";
import "./TodoList.css";
import { Table, Button, Checkbox } from "semantic-ui-react";

export const TodoList = ({ id, title, editRow }) => {
  return (
    <Table.Row>
      <Table.Cell>{id}</Table.Cell>
      <Table.Cell>
        {" "}
        <Checkbox />
      </Table.Cell>
      <Table.Cell>{title}</Table.Cell>

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
