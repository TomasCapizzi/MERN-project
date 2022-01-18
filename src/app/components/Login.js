import {BiLogInCircle} from 'react-icons/bi';
import React from 'react';

const Login = ({logIn}) => {

    return (
        <div className='login'>
            <button onClick={()=> logIn()}>Log in <BiLogInCircle/></button>
        </div>
    )
}

export default Login;
