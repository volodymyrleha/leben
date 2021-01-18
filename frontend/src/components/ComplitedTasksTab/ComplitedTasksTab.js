import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import TasksContainer from '../TasksContainer/TasksContainer';

export default function ComplitedTasksTab(props) {
    const [tasks, setTasks] = useState([]);
    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get('token');

        axios.get('api/task/allcompleted', {
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
            <WorkspaceSection header="Виконані Завдання">
                <TasksContainer tasks={tasks} done handleTab={props.handleTab} />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};