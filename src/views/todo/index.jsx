import React from 'react';
import css from './styles.module.scss';
import {TodoItem} from "../../components/todoItem";
import {TodoListAdder} from "../../components/todoItemAdder";

export class ToDoList extends React.Component {
    state = {
        todoList: [],
        loading: true,
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 3000);
    }

    onRemove = (id) => {
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(item => item.id !== id)
        }))
    };

    render() {
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
                                onRemove={() => this.onRemove(item.id)}
                            />
                        )}
                        <TodoListAdder
                            onCreate={item =>
                                this.setState(prevState => ({
                                    todoList: [
                                        ...prevState.todoList,
                                        item
                                    ]
                                }))
                            }/>
                    </div>}
            </div>
        )
    }
}