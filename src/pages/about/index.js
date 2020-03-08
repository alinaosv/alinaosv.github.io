import React from 'react';

function About() {
    return (
        <div>
            <p>
                Hi, I'm Alina <span role="img" aria-label="girl emoji">👱🏻‍♀️</span> 
                I'm a frontend dev, currently building interfaces at <a target="_blank" href="https://yandex.ru">Yandex</a>.
                Recently I worked at <a target="_blank" href="https://digdes.ru">DigDes</a> - creating web sites for estate & financial agencies.
                I have a passion for yummy animations, clean code & elegant solutions.
            </p>
            
            <p>
                Want to cooperate or just fancy say hi, then get in touch.
                {/* drop me a message on hixid@ya.ru. */}
                {/* Link to linkedIn, github, mail */}
            </p>
        </div>
    );
}

export default About;
