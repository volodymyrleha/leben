import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Button from '../Button/Button';

export default function DoTaskTab(props) {
    const cookies = new Cookies();

    return (
        <div className="drawereditor">
            <p>Редагувати UML:</p>
            <textarea onChange={props.handleChange}>
                {
                    props.edit ? cookies.get('etalon') : ''
                }
            </textarea>
            <p>Опис:</p>
            <textarea onChange={props.handleDescription}>
                {
                    props.edit ? cookies.get('description') : ''
                }
            </textarea>
            <Link to="https://github.com/skanaar/nomnoml" target="_blank">
                <Button w100 color="blue" text="Нотація" />
            </Link>
            <Button w100 color="red" text={ props.create ? 'Створити' : 'Завершити' } onClick={props.handleSend} />
        </div>
    );
};