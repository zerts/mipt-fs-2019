import React from 'react';
import css from './styles.module.scss';
import {TodoItem} from "../../components/todoItem";
import {TodoListAdder} from "../../components/todoItemAdder";
import {connect} from "react-redux";
import {addTodoItem, removeTodoItem} from "../../actions";

export class _ToDoList extends React.Component {
    state = {
        todoList: [{id: '3', text: 'first'}],
        loading: true,
    };

    componentDidMount() {
        setTimeout(
            () =>
                this.setState({loading: false}),
            1000
        );
    }

    onRemove = (id) => {
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(item => item.id !== id)
        }))
    };

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.loading ?
                    <div>
                        <div className={css.ldsFacebook}>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div> :
                    <div className={css.todoList}>
                        {this.state.todoList.map(item =>
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                onRemove={() => {
                                    this.onRemove(item.id);
                                    this.props.removeTodoItem(item.id);
                                }}
                            />
                        )}
                        <TodoListAdder
                            onCreate={item => {
                                this.setState(prevState => ({
                                    todoList: [
                                        ...prevState.todoList,
                                        item
                                    ]
                                }));
                                this.props.addTodoItem(item);
                            }}
                        />
                    </div>}
            </div>
        )
    }
}

export const ToDoList = connect(
    state => ({
        todo: state.todo
    }),
    dispatch => ({
        addTodoItem(item) {
            dispatch(addTodoItem(item));
        },
        removeTodoItem(id) {
            dispatch(removeTodoItem(id));
        }
    })
)(_ToDoList);