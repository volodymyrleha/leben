import React from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import useValueHook from '../../hooks/useValueHook';

export default function Login(props) {
    const emailInput = useValueHook();
    const passwordInput = useValueHook();

    const leftButton = {
        text: 'Зареєструватися',
        onClick: () => {
            props.change(1);
        }
    }

    const rightButton = {
        text: 'Ввійти',
        onClick: () => {
            window.location = window.location.origin + '/home';
        }
    }

    const forgotPasswordButton = {
        text: 'Забули пароль?',
        onClick: () => {
            props.change(3);
        }
    }

    return (
        <LoginContainer header='Ввійти' leftButton={leftButton} rightButton={rightButton}>
            <InputField label='Електронна адреса' value={emailInput.value} onChange={emailInput.handleChange} />
            <InputField label='Пароль' password value={passwordInput.value} onChange={passwordInput.handleChange} />
            <Button onlytext sm text={forgotPasswordButton.text} onClick={forgotPasswordButton.onClick} />
        </LoginContainer>
    );
};