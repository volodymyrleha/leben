import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/lebenlogo.png';
import { ReactComponent as LogoutIcon } from '../../images/logout.svg';

export default function Navbar(props) {
    return (
        <nav className="nav">
            <div>
                <img src={logo} alt="logo" />
                <ul>
                    <li>Лега В.Р.</li>
                    <li>ПЗ-41</li>
                    <li>Студент</li>
                    <li>
                        <Link to="/">
                            <LogoutIcon />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};