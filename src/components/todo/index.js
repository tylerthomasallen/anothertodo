import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }

        this.updateInput = this.updateInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    async updateInput(e) {
        await this.setState({input: e.target.value})
    }

    addTodo(e) {
        e.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({input: ''});
    }

    
    render() {
        const { todos } = this.props;
        return(
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.addTodo}>
                    <label>Add todo here
                        <input type="text" value={this.state.input} onChange={this.updateInput} />
                    </label>
                    <input type="submit" name="submit button" />
                </form>
                {todos.map((todo, i) => {
                    return(
                        <div key={i}> 
                            <h5>{todo}</h5>
                            <h5 onClick={() => this.props.addFinished(todo)}>Move to finished!</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ToDo;