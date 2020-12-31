import React, { useState} from 'react';

export const TaskCreator = props => {

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName('');
    };

    return (
        <div className="mt-1 mb-1" style={{display:"flex"}}>
            <div className="col-10">
            <input 
                type="text"
                className="form-control mt-1"
                value={newTaskName}
                onChange={updateNewTaskValue}
            />
            </div>
            <div className="col-2">
            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                Add
            </button>
            </div>
        </div>
    )
}