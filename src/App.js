import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";

const todos = todosData.map(todo => <TodoItem key={todo.id} todo={todo} />)

export default class App extends React.Component {
    render() {
        return (
            <div className="todo-list">
                {todos}
            </div>
        );
    }
}