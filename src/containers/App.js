import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Container, Button, TextField, Grid } from '@material-ui/core';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from "@material-ui/core/ListItemText";

import './App.css';

import { createTodo } from '../actions/createTodo'
import { toggleCompleteTodo } from '../actions/toggleCompleteTodo'
import { deleteTodo } from '../actions/deleteTodo'

import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

const mapDispatchToProps = dispatch => ({
  createTodo: description => dispatch(createTodo(description)),
  toggleCompleteTodo: id => dispatch(toggleCompleteTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

const mapStateToProps = state => ({
  todoItems: state.todoList
});

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
    const listItems = this.props.todoItems.map(todoItem => {
      const listItemClassName = classNames({'List-item-done': todoItem.completed});
      return (
        <ListItem className={listItemClassName}>
          <ListItemIcon>
            <Checkbox
              style = {{
                color: "green",
              }}
              edge="start"
              checked={todoItem.completed}
              onChange={() => this.props.toggleCompleteTodo(todoItem.id)}
            />
          </ListItemIcon>
          <ListItemText
            primary={todoItem.description}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => this.props.deleteTodo(todoItem.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    });

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