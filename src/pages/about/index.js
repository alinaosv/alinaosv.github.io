import React from 'react';
import Link from '../../components/link/index';
import List from '../../components/list/index';
import linkedinIco from '../../icons/linkedin.svg';
import githubIco from '../../icons/github.svg';
import mailIco from '../../icons/mail.svg';

function About() {
    return (
        <div className="page">
            <p>
                Hi, I'm Alina <span role="img" aria-label="girl emoji">👱🏻‍♀️</span> 
            </p>
            <p>
                I'm a frontend dev, currently building interfaces at <Link to="https://yandex.ru" company="yandex">Yandex</Link>.
                Recently I worked at <Link to="https://digdes.ru" company="digdes">DigDes</Link> – developing interfaces for estate & financial agencies.
                I have a passion for yummy animations, clean code & elegant solutions.
            </p>
            
            <p>
                Want to cooperate or just fancy say hi, then get in touch.
            </p>

            <List className="horizontal centered">
                <Link to="https://www.linkedin.com/in/alinaosv">
                    <img src={linkedinIco} alt="linkedin link"/>
                </Link>
                <Link to="https://github.com/alinaosv">
                    <img src={githubIco} alt="github link"/>
                </Link>
                <Link to="mailto:hixid@ya.ru">
                    <img src={mailIco} alt="mail link"/>
                </Link>
            </List>
        </div>
    );
}

export default About;
