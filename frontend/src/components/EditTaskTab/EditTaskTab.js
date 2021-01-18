import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import Drawer from '../Drawer/Drawer';
import DrawerEditor from '../DrawerEditor/DrawerEditor';

import useValueHook from '../../hooks/useValueHook';

export default function EditTaskTab(props) {
    const cookies = new Cookies();
    const data = useValueHook();
    const description = useValueHook();

    const sendSolution = () => {
        const token = cookies.get('token');

        axios.put(`api/task/${cookies.get('taskId')}`, {
            etalon: data.value,
            description: description.value,
            maxMark: 5
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => { 
            console.log(res.data);
            props.handleTab(0);
        }).catch(err => console.log(err));
    };

    return (
        <WorkspaceContainer>
            <Drawer data={data.value} />
            <DrawerEditor handleChange={data.handleChange} handleDescription={description.handleChange} edit handleSend={sendSolution} />
        </WorkspaceContainer>
    );
};