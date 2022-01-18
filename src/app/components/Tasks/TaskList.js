import React from 'react'
import Task from './Task'

function TaskList({taskList,getTasks, user}) {

    

    return (
        <div className='tasklist-container'>
            <h3>TaskList</h3>
            <table className='tasklist'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList.map(
                            task => <Task task={task} getTasks={getTasks} user={user} key={task._id} />
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}

export default TaskList;
