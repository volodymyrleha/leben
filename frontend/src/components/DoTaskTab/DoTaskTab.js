import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import Drawer from '../Drawer/Drawer';
import DrawerEditor from '../DrawerEditor/DrawerEditor';

import useValueHook from '../../hooks/useValueHook';

export default function DoTaskTab(props) {
    const data = useValueHook();
    const cookies = new Cookies();

    const sendSolution = () => {        
        const token = cookies.get('token');

        axios.post('api/task/taskpass', {
            taskId: localStorage.getItem('taskId'),
            solution: data.value
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => { 
            document.location.reload();
        }).catch(err => console.log(err));
    };

    return (
        <WorkspaceContainer>
            <Drawer data={data.value} />
            <DrawerEditor handleChange={data.handleChange} handleSend={sendSolution} />
        </WorkspaceContainer>
    );
};