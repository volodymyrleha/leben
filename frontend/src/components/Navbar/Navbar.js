import React from 'react';
import Cookies from 'universal-cookie';

import logo from '../../images/lebenlogo.png';
import { ReactComponent as LogoutIcon } from '../../images/logout.svg';

export default function Navbar(props) {
    const cookies = new Cookies();

    const logout = () => {
        cookies.remove('token');
        cookies.remove('role');
        cookies.remove('name');
        window.location = window.location.origin + '/';
    }

    return (
        <nav className="nav">
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    <li>{ cookies.get('name') }</li>
                    <li>{ cookies.get('role') === 'admin' ? 'Адміністратор' : 'Студент' }</li>
                    <li onClick={logout}>               
                        <LogoutIcon />
                    </li>
                </ul>
            </div>
        </nav>
    );
};