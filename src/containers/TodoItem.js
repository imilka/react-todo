import React, { Component } from 'react';
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class TodoItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editable: false,
      description: props.todoItem.description
    };
  }

  handleDoubleClick = () => {
    this.setState({
      editable: true
    });
  };

  handleKeyDown = event => {
    if (event.which === ESCAPE_KEY) {
      this.setState({
        editable: false
      });
    } else if (event.which === ENTER_KEY) {
      this.setState({
        editable: false
      });

      if (this.state.description) {
        this.props.editTodo(this.props.todoItem.id, this.state.description);
      } else {
        this.setState({
          description: this.props.todoItem.description
        })
      }
    }
  };

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    const listItemClassName = classNames({'List-item-done': this.props.todoItem.completed});
    const todoDescription = this.state.editable ?
      (
        <TextField
          autoFocus
          value={this.state.description}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleDescriptionChange}
          fullWidth />
      ) :
      (
        <ListItemText
          primary={this.props.todoItem.description}
        />
      );

    return (
      <ListItem
        className={listItemClassName}
        onDoubleClick={this.handleDoubleClick}
        >
        <ListItemIcon>
          <Checkbox
            style = {{
              color: "green",
            }}
            edge="start"
            checked={this.props.todoItem.completed}
            onChange={() => this.props.toggleCompleteTodo(this.props.todoItem.id)}
          />
        </ListItemIcon>
        {todoDescription}
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => this.props.deleteTodo(this.props.todoItem.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default TodoItem;