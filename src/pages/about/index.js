import React from 'react';
import Link from '../../components/link/index';
import linkedinIco from '../../icons/linkedin.svg';

function About() {
    return (
        <div className="page">
            <p>
                Hi, I'm Alina <span role="img" aria-label="girl emoji">👱🏻‍♀️</span> 
                A frontend dev, currently building interfaces at <Link to="https://yandex.ru" company="yandex">Yandex</Link>.
                Recently I worked at <Link to="https://digdes.ru" company="digdes">DigDes</Link> – developing interfaces for estate & financial agencies.
                I have a passion for yummy animations, clean code & elegant solutions.
            </p>
            
            <p>
                Want to cooperate or just fancy say hi, then get in touch.
            </p>

            <div>
                 <Link to="https://www.linkedin.com/in/alinaosv">
                    <img src={linkedinIco}/>
                </Link>
                 <Link to="https://github.com/alinaosv">
                    Github
                 </Link>
                 <Link to="mailto:hixid@ya.ru">
                    Mail
                 </Link>
            </div>
        </div>
    );
}

export default About;
