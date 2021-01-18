import React from 'react';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import TasksContainer from '../TasksContainer/TasksContainer';

import StatisticsPhoto from '../../images/statistics.jpg';

export default function StatisticsTab(props) {
    const tasksData = [{
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        done: '23.01.21',
        mark: 4
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        done: '23.01.21',
        mark: 4
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        done: '23.01.21',
        mark: 4
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        done: '23.01.21',
        mark: 4
    }, {
        header: 'TaskHeader',
        description: 'description1 description1 description1 description1 description1 description1 description1 description1',
        done: '23.01.21',
        mark: 4
    }];

    return (
        <WorkspaceContainer>
            <WorkspaceHeader header="Статистика" photo={StatisticsPhoto} />
            <WorkspaceSection header="Виконані Завдання">
                <TasksContainer tasks={tasksData} done />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};