import React, { Component } from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {

    state = {
        // label: this.props.label,
        editing: false
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onEditClick = (e) => {
        this.setState(({ editing }, props) => ({
            editing: !editing
        }));
    };

    render() {

        const { label, done, important, onDeleted, onMarkImportant, onLabelClick, onLabelChange } = this.props;

        let classNames = 'row todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }

        let field =
            <span
                className="col todo-list-item-label"
                onClick={ onLabelClick }>
                {label}
            </span>;

        if (this.state.editing) {
            field =
                <input className="todo-list-item-label form-control col d-flex"
                       type="text"
                       onChange={ (e) => onLabelChange(e.target.value) }
                       value={ label }
                />
            // field = <input className="todo-list-item-label " value={label} />
        }

        return (
            <span className={classNames} >
            { field }

                <button type="button"
                        className="btn btn-outline-primary btn-sm float-right"
                        onClick={ this.onEditClick }>
                  <i className="fa fa-edit" />
                </button>

                <button type="button"
                            className="btn btn-outline-success btn-sm float-right"
                            onClick={ onMarkImportant }>
                  <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={ onDeleted }>
                  <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}

export default TodoListItem;

