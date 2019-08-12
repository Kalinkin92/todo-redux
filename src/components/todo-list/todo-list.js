import React from 'react';
import { connect } from 'react-redux';
import { 
    deleteTodo, 
    markTodo,
    doneTodo
} from '../../actions/actions';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, deleteTodo, doneTodo, markTodo }) => {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => deleteTodo(id)}
          onLabelClick={() => doneTodo(id)}
          onMarkImportant={() => markTodo(id)}/>
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
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        markTodo: (id) => dispatch(markTodo(id)),
        doneTodo: (id) => dispatch(doneTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
