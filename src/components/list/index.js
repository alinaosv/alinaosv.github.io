import React from 'react';
import classNames from "classnames";
import './list.css';

export default function List({className, children}) {
    const classes = classNames('list', className);

    return (
        <ul className={classes}>
            {children.map(c => <li>{c}</li>)}
        </ul>
    );
}