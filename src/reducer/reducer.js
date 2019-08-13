import React from 'react';

import {
    ADD_TODO,
    DELETE_TODO,
    MARK_TODO,
    DONE_TODO,
    EDIT_TODO,
    SORT_TODO
} from '../actions/actions'

const initialState = {
    todoData: [
        { label: 'Выпить чаю', important: false, done: false, id: 1 },
        { label: 'Покормить кошку', important: false, done: false, id: 2 },
        { label: 'Приготовить Игорьку, что-нибудь очень вкусное, пожрать', important: false, done: false, id: 3 },
        { label: 'Привет из стореджа', important: false, done: false, id: 4 }
    ],
    filter: '',
    status: 'all',
    max: 100,
    sort: 'num' //alpha
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const text = action.payload;
            const { todoData, max } = state;
            const id = max + 1;
            const newItem = {
                label: text,
                important: false,
                done: false,
                id
            };

            return {
                ...state,
                max: id,
                todoData: [
                    ...todoData,
                    newItem
                ]
            };

        }
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
        case DONE_TODO: {
            const id = action.payload;
            const { todoData } = state;
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData];
            newArray[idx].done = !newArray[idx].done;

            return {
                ...state,
                todoData: newArray
            };
        }

        case EDIT_TODO: {
            const { id, text } = action.payload;
            const { todoData } = state;
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData];
            newArray[idx].label = text;

            return {
                ...state,
                todoData: newArray
            };

        }
        case SORT_TODO: {
            // const order = action.payload;
            const { sort, todoData } = state;
            const alphaSort = (a, b) => {
                if (a.label > b.label) {
                    return 1;
                }
                if (a.label < b.label) {
                    return -1;
                }
                return 0;
            };

            const numSort = (a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            };

            const newArray = [...todoData.sort(sort === 'num' ? alphaSort : numSort)];

            return {
                ...state,
                todoData: newArray,
                sort: sort === 'num' ? 'alpha' : 'num'
            };
        }
        default:
            return state
    }
};

export default reducer;