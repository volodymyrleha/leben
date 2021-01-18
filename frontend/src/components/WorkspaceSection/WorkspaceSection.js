import React from 'react';

export default function WorkspaceSection(props) {
    return (
        <div className="workspacesection">
            <h1>{ props.header }</h1>
            { props.children }
        </div>
    );
};