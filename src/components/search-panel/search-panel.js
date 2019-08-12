import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        filter: ''
    };

    onSearchChange = ({ target: { value } }) => {
        this.props.onSearchChange(value);
        this.setState({
            filter: value
        })
    };

    render (){
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={ this.onSearchChange }
                   value={ this.state.filter }
            />
        );
    }
};


