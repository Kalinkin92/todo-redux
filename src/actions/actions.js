const
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO';

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

export {
    ADD_TODO,
    DELETE_TODO,
    addTodo,
    deleteTodo
}