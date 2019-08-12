const
    ADD_TODO = 'ADD_TODO';

const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
});

export {
    ADD_TODO,
    addTodo
}