import React from 'react';
import './socialList.css';
import Link from '../../components/link/index';
import {ReactComponent as LinkedinIco} from '../../icons/linkedin.svg';
import {ReactComponent as GithubIco} from '../../icons/github.svg';
import {ReactComponent as MailIco} from '../../icons/mail.svg';

export default function SocialList() {
    return (
        <ul className="list horizontal centered">
            <li className="listItem">
                <Link to="https://www.linkedin.com/in/alinaosv">
                    <LinkedinIco />
                </Link>
            </li>
            <li className="listItem">
                <Link to="https://github.com/alinaosv">
                    <GithubIco />
                </Link>
            </li>
            <li className="listItem">
                <Link to="mailto:hixid@ya.ru">
                    <MailIco />
                </Link>
            </li>
        </ul>
    );
}