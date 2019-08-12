import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, onDeleted, onDone, onMarkImportant }) => {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => onDeleted(id)}
          onLabelClick={() => onDone(id)}
          onMarkImportant={() => onMarkImportant(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

const mapStateToProps = (state) => {
    const { todoData } = state;
    return {
        todoData
    }
};
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
