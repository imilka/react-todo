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

import { simpleAction } from '../actions/simpleAction'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = state => ({
  todoItems: state.todoList
});

class App extends Component {

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
              disableRipple
            />
          </ListItemIcon>
          <ListItemText
            primary={todoItem.description}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
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
              defaultValue="Hello World"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary">
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