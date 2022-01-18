import {BiEdit, BiTask, BiTrash} from 'react-icons/bi';
import React, {useRef} from 'react'

function Task({task, getTasks, user}) {

    const titleRef = useRef();
    const descriptionRef = useRef();


    function completeTask(){
        titleRef.current.classList.toggle('task-done');
        descriptionRef.current.classList.toggle('task-done');
        if(task.isCompleted === false){
            const newTask = {
                title: task.title,
                description: task.description,
                uid: user.uid,
                isCompleted: true
            }
            fetch(`/api/tasks/${task._id}`,{
                method: 'PUT',
                body: JSON.stringify(newTask),
                headers: {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                }
            }).then(res => res.json())
                .then(data => console.log(data))
        } else{
            const newTask = {
                title: task.title,
                description: task.description,
                uid: user.uid,
                isCompleted: false
            }
            fetch(`/api/tasks/${task._id}`,{
                method: 'PUT',
                body: JSON.stringify(newTask),
                headers: {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                }
            }).then(res => res.json())
                .then(data => console.log(data))
        }


    }

    
    function deleteTask(id){
        console.log(id);
        fetch('/api/tasks/' + id, {
            method: 'DELETE',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }
        }).then( res => res.json())
            .then(data => getTasks())
    }

    return (
        <tr className='task'>
            <td ref={titleRef} className={task.isCompleted === true ? 'task-done' : ''}>{task.title}</td>
            <td ref={descriptionRef} className={task.isCompleted === true ? 'task-done' : ''}>{task.description}</td>
            <td className='btns'>
                <div className='btn'><BiEdit/><span>Edit</span></div>
                <div className='btn'><BiTask onClick={completeTask}/><span>Complete</span></div>
                <div className='btn'><BiTrash onClick={()=> deleteTask(task._id)} /><span>Delete</span></div>
            </td>
        </tr>

    )
}

export default Task
