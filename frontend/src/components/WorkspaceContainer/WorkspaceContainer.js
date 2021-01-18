import React from 'react';

export default function WorkspaceContainer(props) {
    return (
        <div className="workspace">
            { props.children }
        </div>
    );
};