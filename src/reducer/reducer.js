import React from 'react';

import {
    ADD_TODO
} from '../actions/actions'

const initialState = {
    todoData: [
        { label: 'Выпить чаю', important: false, done: false, id: 1 },
        { label: 'Покормить кошку', important: false, done: false, id: 2 },
        { label: 'Приготовить Игорьку, что-нибудь очень вкусное, пожрать', important: false, done: false, id: 3 },
        { label: 'Привет из стореджа', important: false, done: false, id: 1 }
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
        default:
            return state
    }
};

export default reducer;