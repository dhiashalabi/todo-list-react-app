import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";


export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todos = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />)

        return (
            <div className="todo-list">
                {todos}
            </div>
        );
    }
}