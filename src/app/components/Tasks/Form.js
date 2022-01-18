import React, {useRef} from 'react'

function Form({user, getTasks}) {

    const titleRef = useRef();
    const descriptionRef = useRef();

    function addTask(e){
        e.preventDefault();
        const task = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            uid: user.uid,
            isCompleted: false
        }
        fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }
        }).then( res => console.log(res))

        titleRef.current.value = '';
        descriptionRef.current.value = '';
        getTasks();
    }

    return (
        <form onSubmit={(e)=> addTask(e)} >
            <label>Title</label>
            <input ref={titleRef} required={true}/>
            <label>Description</label>
            <input ref={descriptionRef} required={true}/>
            <button type='submit'><span>Submit</span></button>
        </form>
    )
}

export default Form
