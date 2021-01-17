import React from 'react';
import LoginContainer from '../LoginContainer/LoginContainer';
import InputField from '../InputField/InputField';

import useValueHook from '../../hooks/useValueHook';

export default function Register(props) {
    const emailInput = useValueHook();
    const passwordInput = useValueHook();
    const nameInput = useValueHook();

    const leftButton = {
        text: 'Ввійти',
        onClick: () => {
            props.change(0);
        }
    }

    const rightButton = {
        text: 'Зареєструватися',
        onClick: () => {
            alert('Вас Зареєстровано!');
            props.change(0);
        }
    }

    return (
        <LoginContainer header='Ввійти' leftButton={leftButton} rightButton={rightButton}>
            <InputField label="Ім'я та Прізвище"value={nameInput.value} onChange={nameInput.handleChange} />
            <InputField label='Електронна адреса' value={emailInput.value} onChange={emailInput.handleChange} />
            <InputField label='Пароль' password value={passwordInput.value} onChange={passwordInput.handleChange} />
        </LoginContainer>
    );
};