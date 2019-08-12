import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addTodo
} from '../../actions/actions';

import './item-add-form.css';

class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
        label: e.target.value
    });
  };

  onSUbmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.label);
    this.setState({
        label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={ this.onSUbmit }>
        <input className="form-control"
               type="text"
               onChange={ this.onLabelChange }
               placeholder="What needs to be done"
               value={ this.state.label }
        />
        <button
          className="btn btn-outline-secondary pull-right">
          Add Item
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    // const { todoData } = state;
    return {
        // todoData
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);