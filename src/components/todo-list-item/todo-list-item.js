import React, { Component } from 'react';

import './todo-list-item.css';

const TodoListItem = (props) => {

    const { label, done, important, onDeleted, onMarkImportant, onLabelClick } = props;

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }
    return (
        <span className={classNames}>
        <span
            className="todo-list-item-label"
            onClick={ onLabelClick }>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onMarkImportant }>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
        </span>
    );
};

export default TodoListItem;

