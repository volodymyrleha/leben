import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

export default function DoTaskTab(props) {
    return (
        <div className="drawereditor">
            <p>Редагувати UML:</p>
            <textarea onChange={props.handleChange}></textarea>
            <Link to="https://github.com/skanaar/nomnoml" target="_blank">
                <Button w100 color="blue" text="Нотація" />
            </Link>
            <Button w100 color="red" text="Завершити" onClick={props.handleSend} />
        </div>
    );
};