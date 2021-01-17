import React from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import InputField from '../InputField/InputField';

import useValueHook from '../../hooks/useValueHook';

export default function Register(props) {
    const emailInput = useValueHook();
    const passwordInput = useValueHook();

    const leftButton = {
        text: 'Ввійти',
        onClick: () => {
            props.change(0);
        }
    }

    const rightButton = {
        text: 'Змінити пароль',
        onClick: () => {
            alert('Пароль змінено');
            props.change(0);
        }
    }

    return (
        <LoginContainer header='Змінити пароль' leftButton={leftButton} rightButton={rightButton}>
            <InputField label='Електронна адреса' value={emailInput.value} onChange={emailInput.handleChange} />
            <InputField label='Пароль' password value={passwordInput.value} onChange={passwordInput.handleChange} />
        </LoginContainer>
    );
};