import React from 'react';
import Cookies from 'universal-cookie';

import logo from '../../images/lebenlogo.png';
import { ReactComponent as LogoutIcon } from '../../images/logout.svg';

export default function Navbar(props) {
    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('token');
        window.location = window.location.origin + '/';
    }

    return (
        <nav className="nav">
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    <li>Лега В.Р.</li>
                    <li>ПЗ-41</li>
                    <li>Студент</li>
                    <li onClick={logout}>               
                        <LogoutIcon />
                    </li>
                </ul>
            </div>
        </nav>
    );
};