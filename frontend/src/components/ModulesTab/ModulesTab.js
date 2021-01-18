import React from 'react';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import ModulesContainer from '../ModulesContainer/ModulesContainer';

export default function ModulesTab(props) {
    return (
        <WorkspaceContainer>
            <WorkspaceSection header="Доступні Модулі">
                <ModulesContainer handleTab={props.handleTab} />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};