import React, { useState } from 'react';
import Cookies from 'universal-cookie';

import { ReactComponent as GraphIcon } from '../../images/graph.svg';
import { ReactComponent as CodeIcon } from '../../images/coding.svg';

export default function Sidebar(props) {
    const [active, setActive] = useState(0);
    const cookies = new Cookies();

    const handleChange = tab => {
        props.handleTab(tab);
        setActive(tab);
    }

    return (
        <div className="sidebar">
            <ul>
                <li className={active === 0 ? 'active' : ''} onClick={() => { handleChange(0) }}>
                    <CodeIcon />
                    <span>{ cookies.get('role') === 'admin' ? 'Завдання' : 'Модулі' }</span>
                </li>
                <li className={active === 1 ? 'active' : ''} onClick={() => { handleChange(1) }}>
                    <GraphIcon />
                    <span>Статистика</span>
                </li>
            </ul>
        </div>
    );
};