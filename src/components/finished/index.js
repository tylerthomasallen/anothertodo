import React, { Component } from 'react';

const Finished = ({finished, addTodo}) => {
    return(
        <div>
            <h1>Finished List</h1>
            {finished.map((task, i) => {
                return(
                    <div key={i}>
                        <h5>{task}</h5>
                        <h5 onClick={() => addTodo(task)}>Move back to Todo List</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Finished;

