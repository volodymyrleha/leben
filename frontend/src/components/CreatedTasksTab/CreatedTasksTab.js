import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import WorkspaceSection from '../WorkspaceSection/WorkspaceSection';
import TasksContainer from '../TasksContainer/TasksContainer';
import Button from '../Button/Button';

export default function CreatedTasksTab(props) {
    const [tasks, setTasks] = useState([]);
    const cookies = new Cookies();

    useEffect(() => {
        const token = cookies.get('token');

        axios.get('api/task', {
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
            <WorkspaceSection header="Створені Завдання">
                <TasksContainer tasks={tasks} edit handleTab={props.handleTab} />
                <Button color="blue" text="Створити завдання" onClick={() => { props.handleTab(3) }} />
            </WorkspaceSection>
        </WorkspaceContainer>
    );
};