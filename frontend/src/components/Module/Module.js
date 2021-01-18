import React from 'react';
import Button from '../Button/Button';

export default function Module(props) {
    const { text, photo, onClick } = props.module;

    return (
        <div className="module" style={{ backgroundImage: `url(${photo})` }}>
            <div>
                <p>{ text }</p>
                <Button color="blue" text='Відкрити' onClick={onClick} />
            </div>
        </div>
    );
};