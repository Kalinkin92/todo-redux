import React from 'react';

import {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO
} from '../actions/actions'

const initialState = {
    todoData: [
        { label: 'Выпить чаю', important: false, done: false, id: 1 },
        { label: 'Покормить кошку', important: false, done: false, id: 2 },
        { label: 'Приготовить Игорьку, что-нибудь очень вкусное, пожрать', important: false, done: false, id: 3 },
        { label: 'Привет из стореджа', important: false, done: false, id: 4 }
    ],
    filter: '',
    status: 'all'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state
            };
        case DELETE_TODO: {
            const id = action.payload;
            const { todoData } = state;
            const idx = todoData.findIndex((el) => el.id === id);

            return {
                ...state,
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            };

        }
        case MARK_TODO: {
            const id = action.payload;
            const { todoData } = state;
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData];
            newArray[idx].important = !newArray[idx].important;

            return {
                ...state,
                todoData: newArray
            };


        }
        default:
            return state
    }
};

export default reducer;