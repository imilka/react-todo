import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Button, TextField, Grid } from '@material-ui/core';
import List from "@material-ui/core/List";

import './App.css';

import { createTodo } from '../actions/createTodo'
import { toggleCompleteTodo } from '../actions/toggleCompleteTodo'
import { deleteTodo } from '../actions/deleteTodo'
import { editTodo } from '../actions/editTodo'

import TodoItem from "./TodoItem";

const mapDispatchToProps = dispatch => ({
  createTodo: description => dispatch(createTodo(description)),
  toggleCompleteTodo: id => dispatch(toggleCompleteTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id, description) => dispatch(editTodo(id, description))
});

const mapStateToProps = state => {
  // should use something like reselect here
  const sorted = state.todoList.slice().sort((a, b) => {
    return b.description.toString().localeCompare(a.description);
  });

  return {
    todoItems: sorted
  };
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pendingTodoDescription: ''
    };
  }

  handlePendingTodoDescriptionChange = event => {
    this.setState({
      pendingTodoDescription: event.target.value
    });
  };

  createTodo = () => {
    this.props.createTodo(this.state.pendingTodoDescription);
    this.setState({
      pendingTodoDescription: ''
    });
  };

  render() {
    const listItems = this.props.todoItems.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        todoItem={todoItem}
        toggleCompleteTodo={this.props.toggleCompleteTodo}
        deleteTodo={this.props.deleteTodo}
        editTodo={this.props.editTodo}
      />
    ));

    return (
      <Container className="App-container" maxWidth="sm">
        <Grid container direction="row" spacing={3}>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label="Task description"
              value={this.state.pendingTodoDescription}
              onChange={this.handlePendingTodoDescriptionChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={!this.state.pendingTodoDescription}
              onClick={this.createTodo}>
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            <List>
              {listItems}
            </List>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);