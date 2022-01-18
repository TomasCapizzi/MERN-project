import {BsBriefcaseFill, BsGithub, BsLinkedin} from 'react-icons/bs';
import {SiExpress, SiMongodb, SiNodedotjs, SiReact, SiSass} from 'react-icons/si'

import React from 'react';

function Footer() {
    return (
        <footer>
            <div>
                <p>Full Stack Mern Project</p>
                <p>Stack: </p>
                <ul>
                    <li><span>MongoDB</span><SiMongodb/> |</li>
                    <li><span>Express</span><SiExpress/> |</li>
                    <li><span>React JS</span><SiReact/> |</li>
                    <li><span>Node JS</span><SiNodedotjs/> |</li>
                    <li><span>Sass</span><SiSass/></li>
                </ul>
            </div>
            <div>
                <p>Tomas Capizzi | 2022</p>
                <ul className='contact'>
                    <li><a href='https://www.linkedin.com/in/tomas-capizzi/' target='_blank'><BsLinkedin/></a></li>
                    <li><a href='https://github.com/TomasCapizzi' target='_blank'><BsGithub/></a></li>
                    <li><a href='https://tomascapizzi-portfolio.netlify.app/' target='_blank'><BsBriefcaseFill/></a></li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
