import React from 'react';

import WorkspaceContainer from '../WorkspaceContainer/WorkspaceContainer';
import Drawer from '../Drawer/Drawer';
import DrawerEditor from '../DrawerEditor/DrawerEditor';

import useValueHook from '../../hooks/useValueHook';

export default function DoTaskTab(props) {
    const data = useValueHook();

    return (
        <WorkspaceContainer>
            <Drawer data={data.value} />
            <DrawerEditor handleChange={data.handleChange} />
        </WorkspaceContainer>
    );
};