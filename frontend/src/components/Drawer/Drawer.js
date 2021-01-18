import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import nomnoml from 'nomnoml';

export default function DoTaskTab(props) {
    const drawerUML = useRef();

    useEffect(() => {
        try {
            nomnoml.draw(ReactDOM.findDOMNode(drawerUML.current), props.data);
        } catch (err) {
            nomnoml.draw(ReactDOM.findDOMNode(drawerUML.current), 'Не правильний формат');
        }
    });

    return (
        <canvas className="drawer" ref={drawerUML}></canvas>
    );
};