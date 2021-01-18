import React from 'react';
import Button from '../Button/Button';

import logo from '../../images/lebenlogo.png'

export default function LoginContainer(props) {
    return (
        <div className="logincontainer">
            <div className="logincontainer__left">
                <img src={logo} alt="logo" />
                <Button bordered text={props.leftButton.text} onClick={props.leftButton.onClick} />
            </div>
            <div className="logincontainer__right">
                <h1>{props.header}</h1>
                { props.children }
                <Button color="blue" text={props.rightButton.text} onClick={props.rightButton.onClick} />
            </div>
        </div>
    );
};