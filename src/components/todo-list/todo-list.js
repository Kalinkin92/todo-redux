import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/actions';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, deleteTodo, onDone, onMarkImportant }) => {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => deleteTodo(id)}
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
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
