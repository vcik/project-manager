import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li>
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

// TodoItem.propTypes = {
//   todo: React.PropTypes.object
// }


export default TodoItem;
