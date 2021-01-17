import React from 'react';

export default function LoginLayout(props) {
    let styles = 'button';

    styles += props.bordered ? ' button--bordered' : 
        ( props.onlytext ? ' button--onlytext' : ' button--blue' );

    styles += props.sm ? ' button--sm' : '';

    return (
        <button className={styles} onClick={props.onClick}>{ props.text }</button>
    );
};