import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    sortTodo
} from '../../actions/actions';

import './sort-button.css';


const SortButton = ({ sort, sortTodo }) => {

      let classNames = "btn btn-outline-dark";
      if (sort === "alpha") classNames = "btn btn-dark";
      return (
        <button type="button" className={classNames} onClick={sortTodo}>
            <i className="fas fa-sort-alpha-down"></i> Sort
        </button>
    );
}


const mapStateToProps = (state) => {
    const { sort } = state;
    return {
        sort
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sortTodo: () => dispatch(sortTodo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);