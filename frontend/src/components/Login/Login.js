import React from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import InputField from '../InputField/InputField';
import Button from '../Button/Button';

import Cookies from 'universal-cookie';

import useValueHook from '../../hooks/useValueHook';

export default function Login(props) {
    const emailInput = useValueHook();
    const passwordInput = useValueHook();

    const cookies = new Cookies();

    const leftButton = {
        text: 'Зареєструватися',
        onClick: () => {
            props.change(1);
        }
    }

    const rightButton = {
        text: 'Ввійти',
        onClick: () => {
            const requestOptions = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value
                })
            };

            fetch('api/auth/login', requestOptions)
                .then(res => res.json())
                .then(data => {
                    cookies.set('token', data.token);
                    window.location = window.location.origin + '/workspace';
                })
                .catch(err => {
                    alert('Введено неправильно логін або пароль')
                })
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