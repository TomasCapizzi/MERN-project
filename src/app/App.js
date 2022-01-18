import './styles/main.scss';

import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth';
import React,{useEffect, useState} from 'react';

import Footer from './components/Footer';
import Form from './components/Tasks/Form';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TaskList from './components/Tasks/TaskList';
import app from '../../firebase';

function App(){

    const [user, setUser] = useState(null)
    const [taskList, setTaskList] = useState([])

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (fbUser)=>{    
        fbUser ? setUser(fbUser) : setUser(null)
    })

    function logIn(){
        signInWithPopup(auth, provider);
        setUser(auth.currentUser);
    }
    function logOut(){
        signOut(auth);
        setUser(null);
    }

    function getTasks(){
        if(user){
            fetch('/api/tasks')
                .then(res => res.json())
                .then(data => {
                    setTaskList(data.filter(task => task.uid === user.uid))
                })
        }
    }

    useEffect(() => {
        getTasks();
    }, [user]);

    return(
        <div className='app'>
            <Navbar user={user} logOut={logOut}/>
            <section className='container'>
                {
                    user ?  <>
                                <TaskList taskList={taskList} getTasks={getTasks} user={user}/>
                                <Form user={user} getTasks={getTasks} />
                            </>
                            :
                                <Login logIn={logIn}/>
                }             
            </section>
            <Footer/> 
        </div>
    )
}
export default App
 