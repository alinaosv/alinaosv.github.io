import React from 'react';
import './socialList.css';
import Link from '../../components/link/index';
import linkedinIco from '../../icons/linkedin.svg';
import githubIco from '../../icons/github.svg';
import mailIco from '../../icons/mail.svg';

export default function SocialList() {
    return (
        <ul className="list horizontal centered">
            <li className="listItem">
                <Link to="https://www.linkedin.com/in/alinaosv">
                    <img src={linkedinIco} alt="linkedin link"/>
                </Link>
            </li>
            <li className="listItem">
                <Link to="https://github.com/alinaosv">
                    <img src={githubIco} alt="github link"/>
                </Link>
            </li>
            <li className="listItem">
                <Link to="mailto:hixid@ya.ru">
                    <img src={mailIco} alt="mail link"/>
                </Link>
            </li>
        </ul>
    );
}