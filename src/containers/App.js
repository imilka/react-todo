import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  ...state
});

class App extends Component {

  render() {
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
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    style = {{
                      color: "green",
                    }}
                    edge="start"
                    checked
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary="To do something very hard and very long so I can check how long task descriptions fit into this layout"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    style = {{
                      color: "green",
                    }}
                    edge="start"
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Task 2"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem className="List-item-done">
                <ListItemIcon>
                  <Checkbox
                    style = {{
                      color: "green",
                    }}
                    edge="start"
                    checked
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Task 3"
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);