import React from 'react';
import Link from '../../components/link/index';
import SocialList from '../../components/socialList/index';

function About() {
    return (
        <div className="page">
            <h2>
                Hi, I'm Alina <span role="img" aria-label="girl emoji">👱🏻‍♀️</span> 
            </h2>
            <p>
                I'm a frontend dev, currently building interfaces at <Link to="https://yandex.ru" company="yandex">Yandex</Link>.
                Recently I worked at <Link to="https://digdes.ru" company="digdes">DigDes</Link> – developing interfaces for estate & financial agencies.
                I have a passion for yummy animations, clean code & elegant solutions.
            </p>
            
            <p>
                Want to cooperate or just fancy say hi, then get in touch.
            </p>

            <SocialList />
        </div>
    );
}

export default About;
