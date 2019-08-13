import React, { Component } from 'react';

import './sort-button.css';


export default class SortButton extends Component {

  render() {

    return (
        <button type="button" className="btn btn-outline-dark" >
            <i className="fas fa-sort-alpha-down"></i> Sort
        </button>
    );
  }
}
