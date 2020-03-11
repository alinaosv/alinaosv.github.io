import React from 'react';
import './link.css';

function Link(props) {
    return <a 
        href={props.to}
        rel="noopener noreferrer"
        className={`link ${props.company ? 'link--' + props.company : ''}`}
        target="_blank">
            {props.children}
    </a>
}

export default Link;
