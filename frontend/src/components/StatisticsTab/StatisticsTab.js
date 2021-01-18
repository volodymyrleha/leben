import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import TasksContainer from '../TasksContainer/TasksContainer';

import StatisticsPhoto from '../../images/statistics.jpg';

export default function StatisticsTab(props) {
    const [tasks, setTasks] = useState([]);
    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get('token');

        axios.get('api/task/completed', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => { 
            console.log(res.data);
            setTasks(res.data.tasks);
        }).catch(err => console.log(err));
    }, []);

    return (
        <WorkspaceContainer>
            <WorkspaceHeader header="Статистика" photo={StatisticsPhoto} />
            <WorkspaceSection header="Виконані Завдання">
                <TasksContainer tasks={tasks} done />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};