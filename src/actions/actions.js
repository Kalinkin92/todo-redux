const
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DONE_TODO = 'DONE_TODO',
    MARK_TODO = 'MARK_TODO';

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
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

export {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO,
    DONE_TODO,
    addTodo,
    deleteTodo,
    markTodo,
    doneTodo
}