import React from 'react';

export default function LoginLayout(props) {
    let styles = 'button';

    styles += ` button--${props.color}`;

    styles += props.bordered ? ' button--bordered' : 
        ( props.onlytext ? ' button--onlytext' : '' );

    styles += props.sm ? ' button--sm' : '';

    styles += props.w100 ? ' button--w100' : '';

    return (
        <button className={styles} onClick={props.onClick}>{ props.text }</button>
    );
};