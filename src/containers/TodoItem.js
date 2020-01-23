import React, { Component } from 'react';
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TodoItem extends Component {

  render() {
    const listItemClassName = classNames({'List-item-done': this.props.todoItem.completed});
    return (
      <ListItem className={listItemClassName}>
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
        <ListItemText
          primary={this.props.todoItem.description}
        />
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