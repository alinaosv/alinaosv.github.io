import React from 'react';
import './socialList.css';
import Link from '../../components/link/index';
import {ReactComponent as LinkedinIco} from '../../assets/icons/linkedin.svg';
import {ReactComponent as GithubIco} from '../../assets/icons/github.svg';
import {ReactComponent as TelegramIco} from '../../assets/icons/telegram.svg';

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
                <Link to="https://telegram.me/alinaosv">
                    <TelegramIco />
                </Link>
            </li>
        </ul>
    );
}