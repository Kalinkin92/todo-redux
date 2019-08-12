import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;


    state = {
        todoData: [
            /*{ label: 'Drink Coffee', important: false, done: false, id: 1 },
            { label: 'Make Awesome App', important: true, done: false, id: 2 },
            { label: 'Have a lunch', important: false, done: false, id: 3 }*/
            { label: 'Выпить чаю', important: false, done: false, id: 1 },
            { label: 'Покормить кошку', important: false, done: false, id: 2 },
            { label: 'Приготовить Игорьку, что-нибудь очень вкусное, пожрать', important: false, done: false, id: 3 }
        ],
        filter: '',
        status: 'all'
    };

    deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

    addItem = (text) => {
        const newItem = {
          label: text,
          important: false,
          id: this.maxId++
        };

        this.setState(({ todoData }) => {
            const newArr = [
            ...todoData,
            newItem
            ];

          return {
              todoData: newArr
          };
        });

    };

    doneItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData];
            newArray[idx].done = !newArray[idx].done;

            return {
                todoData: newArray
            };
        });
    };

    markItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [...todoData];
            newArray[idx].important = !newArray[idx].important;

            return {
                todoData: newArray
            };
        });
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
                  <ItemStatusFilter
                      onFilterChange={ this.changeStatus }
                      status={ status }
                  />
                </div>

                <TodoList
                  // todos={ filteredData }
                  // onDeleted={ this.deleteItem }
                  // onDone={ this.doneItem }
                  // onMarkImportant={ this.markItem }
                />

                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
  }
};