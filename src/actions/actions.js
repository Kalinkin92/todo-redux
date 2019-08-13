const
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DONE_TODO = 'DONE_TODO',
    MARK_TODO = 'MARK_TODO',
    EDIT_TODO = 'EDIT_TODO';

const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
});

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

const markTodo = (id) => ({
    type: MARK_TODO,
    payload: id
});

const doneTodo = (id) => ({
    type: DONE_TODO,
    payload: id
});

const editTodo = ({id, text}) => ({
    type: EDIT_TODO,
    payload: {id, text}
});

export {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO,
    DONE_TODO,
    EDIT_TODO,
    addTodo,
    deleteTodo,
    markTodo,
    doneTodo,
    editTodo
}