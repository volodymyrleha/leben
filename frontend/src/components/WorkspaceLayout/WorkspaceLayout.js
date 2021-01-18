import React from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ModulesTab from  '../ModulesTab/ModulesTab';
import StatisticsTab from '../StatisticsTab/StatisticsTab';
import TasksTab from '../TasksTab/TasksTab';
import DoTaskTab from '../DoTaskTab/DoTaskTab';

import useTabHook from '../../hooks/useTabHook';

export default function WorkspaceLayout(props) {
    const tabHook = useTabHook();

    let tab;
    switch (tabHook.tab) {
        case 0:
            tab = <ModulesTab handleTab={tabHook.handleTab} />;
            break;
        case 1:
            tab = <StatisticsTab />;
            break;
        case 2:
            tab = <TasksTab handleTab={tabHook.handleTab} />
            break;
        case 3:
            tab = <DoTaskTab />
            break;
        default:
            tab = <ModulesTab handleTab={tabHook.handleTab} />;
            break;
    }

    return (
        <React.Fragment>
            <Navbar />
            <Sidebar handleTab={tabHook.handleTab} />
            { tab }
        </React.Fragment>
    );
};