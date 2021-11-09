import React from "react";


export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.todo.completed} onChange={()=>{alert("Changed !")}}/>
                <p>{this.props.todo.text}</p>
            </div>
        );
    }
}
