import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.scss';

export const TodoItem = props => {
    return (
        <form
            className={css.todoItem}
        >
            <div>
                {props.text}
            </div>
            <button
                className={css.removeButton}
                onClick={(e) => {
                    e.preventDefault();
                    props.onRemove();
                }}
            >
                Remove
            </button>
        </form>
    )
};

TodoItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    onRemove: PropTypes.func,
};

TodoItem.defaultProps = {
    id: '',
    text: '',
    onRemove: () => null,
};