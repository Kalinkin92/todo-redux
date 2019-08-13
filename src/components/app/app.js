import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import SortButton from '../sort-button';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            { label: 'Выпить чаю', important: false, done: false, id: 1 },
            { label: 'Покормить кошку', important: false, done: false, id: 2 },
            { label: 'Приготовить Игорьку, что-нибудь очень вкусное, пожрать', important: false, done: false, id: 3 }
        ],
        filter: '',
        status: 'all'
    };

    changeFilter = (filter) => {
        this.setState({ filter })
    };

    changeStatus = (status) => {
        this.setState({status})
    };

    render() {
        const { todoData, filter, status } = this.state;

        const searchText = (todoData, filter) => {
            //строка поиска
            if (filter.length !== 0) {
                return todoData.filter(({ label }) => label.toUpperCase().indexOf(filter.toUpperCase()) > -1);
            } else {
                return todoData
            }
        };

        const filterStatus = (todoData, status = 'all') => {
            switch (status) {
                case 'active':
                    return todoData.filter(({done = false}) => !done);
                    break;
                case 'done':
                    return todoData.filter(({done = false}) => done);
                    break;
                default :
                    return todoData;
            }
        };

        let filteredData = searchText(todoData, filter);
        filteredData = filterStatus(filteredData, status);
        const doneItemsCount = todoData.filter(({ done }) => done ).length;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoData.length} done={doneItemsCount} />
                <div className="top-panel d-flex">
                  <SearchPanel
                      onSearchChange={ this.changeFilter } />
                    <SortButton />

                  <ItemStatusFilter
                      onFilterChange={ this.changeStatus }
                      status={ status }
                  />
                </div>

                <TodoList />
                <ItemAddForm/>
            </div>
        );
  }
};