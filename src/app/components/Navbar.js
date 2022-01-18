import {BiLogOutCircle, BiTask} from 'react-icons/bi'

import React from 'react';

function Navbar({user, logOut}) {

    return (
        <nav className='navbar'>
            {user && <p>Hi, <span>{user.displayName}!</span></p> }
            <h1><span>Task</span> Manager <BiTask/></h1>
            {user && <button onClick={()=> logOut()} className='effect1' ><span>Log out <BiLogOutCircle/></span></button>}
        </nav>
    )
}

export default Navbar;
