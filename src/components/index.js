import React, { Component } from 'react';
import ToDo from './todo';
import Finished from './finished';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            finished: []
        }

        this.addTodo = this.addTodo.bind(this);
        this.addFinished = this.addFinished.bind(this);
    }

    async addTodo(input) {
        let { todos, finished } = this.state;
        todos.push(input);
        await this.setState({todos});

        let idx = finished.indexOf(input)
        if (idx > -1) {
            finished.splice(idx, 1)
            this.setState({finished})
        }
    }

    addFinished(todo) {
        let { todos, finished } = this.state;
        finished.push(todo);
        let idx = todos.indexOf(todo);
        if (idx > -1) {
            todos.splice(idx, 1);
        }

        this.setState({todos, finished});
    }

    render() {
        const { todos, finished } = this.state;
        return(
            <div>
                <ToDo addTodo={this.addTodo} todos={todos} addFinished={this.addFinished}/>
                <Finished finished={finished} addTodo={this.addTodo}/>
            </div>
        )
    }
}

export default Container;