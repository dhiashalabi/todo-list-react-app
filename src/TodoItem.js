import React from "react";


export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todo.completed} onChange={(event) => this.props.handleChange(this.props.todo.id)} />
                <p style={this.props.todo.completed ? completedStyle:null}>{this.props.todo.text}</p>
            </div>
        );
    }
}
