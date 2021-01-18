import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import WorkspaceHeader from '../WorkspaceHeader/WorkspaceHeader';
import TasksContainer from '../TasksContainer/TasksContainer';

import ModellingPhoto from '../../images/modelling.png';

export default function TasksTab(props) {
    const [tasks, setTasks] = useState([]);
    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get('token');

        axios.get('api/task/notcompleted', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => { 
            setTasks(res.data.tasks);
        }).catch(err => console.log(err));
    }, []);

    return (
        <WorkspaceContainer>
            <WorkspaceHeader header="Моделювання" photo={ModellingPhoto} />
            <WorkspaceSection header="Доступні Завдання">
                <TasksContainer tasks={tasks} handleTab={props.handleTab} />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};