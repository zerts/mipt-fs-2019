import React from 'react';
import css from './styles.module.scss';
import {TodoItem} from "../../components/todoItem";
import {TodoListAdder} from "../../components/todoItemAdder";
import {connect} from "react-redux";
import {addTodoItem, removeTodoItem} from "../../actions";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export class _ToDoList extends React.Component {
    state = {
        todoList: [],
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
        // console.log(this.state);
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
                    <TransitionGroup className={css.todoList}>
                        {this.props.todo.map(item =>
                            <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames={{
                                    enter: css.listItemEnter,
                                    enterActive: css.listItemEnterActive,
                                    exit: css.listItemExit,
                                    exitActive: css.listItemExitActive,
                                }}
                            >
                            <TodoItem
                                text={item.text}
                                onRemove={() => {
                                    this.onRemove(item.id);
                                    this.props.removeTodoItem(item.id);
                                }}
                            />
                            </CSSTransition>
                        )}
                        <TodoListAdder
                            onCreate={item => {
                                // this.setState(prevState => ({
                                //     todoList: [
                                //         ...prevState.todoList,
                                //         item
                                //     ]
                                // }));
                                this.props.addTodoItem2(item);
                            }}
                        />
                    </TransitionGroup>}
            </div>
        )
    }
}

export const ToDoList = connect(
    store => ({
        todo: store.todo,
    }),
    dispatch => ({
        addTodoItem2(item) {
            dispatch(addTodoItem(item));
        },
        removeTodoItem(id) {
            dispatch(removeTodoItem(id));
        }
    })
)(_ToDoList);