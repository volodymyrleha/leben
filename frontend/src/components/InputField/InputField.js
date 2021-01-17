import React from 'react';

export default function InputField(props) {
    return (
        <div className="inputfield">
            <label>{ props.label }</label>
            <input type={ props.password ? 'password' : 'text' } value={props.value} onChange={props.onChange} />
        </div>
    );
};