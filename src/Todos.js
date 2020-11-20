import React, { Component } from 'react'

export default class Todos extends Component {
    
    render() {
        const todos= this.props.todos;
        const deleteTodo= this.props.deleteTodo;

        const todoList= todos.length ? (
            todos.map(todo=>{
                return (
                    <div className="collection-item" key = {todo.id}>
                        <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                    </div>
                )
            })
        ):(
            <p className="center">You have no todos left, yay</p>
        )

        return (
            <div className="todos collection">
                {todoList}
            </div>
        )
    }
}
