import React from 'react';

export default function WorkspaceHeader(props) {
    return (
        <header className="workspaceheader" style={{ backgroundImage: `url(${props.photo})` }}>
            <div>
                <h1>{ props.header }</h1>
            </div>
        </header>
    );
};