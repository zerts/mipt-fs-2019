import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';
import css from './styles.module.scss';

export class TodoListAdder extends React.Component {
    static propTypes = {
        onCreate: PropTypes.func,
    };

    static defaultProps = {
        onCreate: () => null,
    };

    state = {
        value: '',
    };

    onCreate = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return;
        }
        this.props.onCreate({
            text: this.state.value,
            id: v4()
        });
        this.setState({value: ''})
    };

    render() {
        return (
            <form className={css.todoItemAdder} onSubmit={this.onCreate}>
                <input
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    placeholder={'New To Do Item...'}
                />
                <button className={css.addButton} type={'submit'}>
                    Add
                </button>
            </form>
        )
    }
}