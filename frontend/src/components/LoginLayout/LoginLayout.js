import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ChangePassword from '../ChangePassword/ChangePassword';

export default function LoginLayout(props) {
    const [tab, setTab] = useState(0);

    const handleTab = newTab => {
        setTab(newTab);
    }

    return (
        <div className="loginlayout">
            {
                tab === 0 ? <Login change={handleTab} /> :
                    ( tab === 1 ? <Register change={handleTab} /> : <ChangePassword change={handleTab} /> )
            }
        </div>
    );
};