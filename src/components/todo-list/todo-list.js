import React from 'react';
import { connect } from 'react-redux';
import { 
    deleteTodo, 
    markTodo,
    doneTodo,
    editTodo,
} from '../../actions/actions';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoData, deleteTodo, doneTodo, markTodo, editTodo }) => {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
          onDeleted={() => deleteTodo(id)}
          onLabelClick={() => doneTodo(id)}
          onMarkImportant={() => markTodo(id)}
          onLabelChange={(text) => editTodo({id, text})}
        />
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
        doneTodo: (id) => dispatch(doneTodo(id)),
        editTodo: ({id, text}) => dispatch(editTodo({id, text}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
