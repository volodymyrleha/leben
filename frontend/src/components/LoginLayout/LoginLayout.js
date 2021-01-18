import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ChangePassword from '../ChangePassword/ChangePassword';

import Cookies from 'universal-cookie';

import useTabHook from '../../hooks/useTabHook';

export default function LoginLayout(props) {
    const tabHook = useTabHook();

    const cookies = new Cookies();

    if (cookies.get('token'))
        window.location = window.location.origin + '/workspace';

    return (
        <div className="loginlayout">
            {
                tabHook.tab === 0 ? <Login change={tabHook.handleTab} /> :
                    ( tabHook.tab === 1 ? <Register change={tabHook.handleTab} /> : <ChangePassword change={tabHook.handleTab} /> )
            }
        </div>
    );
};