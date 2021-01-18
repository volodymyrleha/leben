import React from 'react';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import TasksContainer from '../TasksContainer/TasksContainer';

import ModellingPhoto from '../../images/modelling.png';

export default function TasksTab(props) {
    const openTask = () => {
        props.handleTab(3);
    }

    const tasksData = [{
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        ddl: '23.01.21',
        openTask: openTask        
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        ddl: '23.01.21',
        openTask: openTask
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        ddl: '23.01.21',
        openTask: openTask
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        ddl: '23.01.21',
        openTask: openTask      
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        ddl: '23.01.21',
        openTask: openTask       
    }];

    return (
        <WorkspaceContainer>
            <WorkspaceHeader header="Моделювання" photo={ModellingPhoto} />
            <WorkspaceSection header="Доступні Завдання">
                <TasksContainer tasks={tasksData} />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};