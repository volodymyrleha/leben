import React from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ModulesTab from  '../ModulesTab/ModulesTab';
import StatisticsTab from '../StatisticsTab/StatisticsTab';
import TasksTab from '../TasksTab/TasksTab';
import DoTaskTab from '../DoTaskTab/DoTaskTab';
import CreatedTasksTab from '../CreatedTasksTab/CreatedTasksTab';
import ComplitedTasksTab from '../ComplitedTasksTab/ComplitedTasksTab';
import CreateTaskTab from '../CreateTaskTab/CreateTaskTab';
import EditTaskTab from '../EditTaskTab/EditTaskTab';

import Cookies from 'universal-cookie';

import useTabHook from '../../hooks/useTabHook';

export default function WorkspaceLayout(props) {
    const tabHook = useTabHook();

    const cookies = new Cookies();

    if (!cookies.get('token'))
        window.location = window.location.origin + '/';

    let tab;
    if (cookies.get('role') === 'user') {
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
    } else {
        switch (tabHook.tab) {
            case 0:
                tab = <CreatedTasksTab handleTab={tabHook.handleTab} />;
                break;
            case 1:
                tab = <ComplitedTasksTab />;
                break;
            case 2:
                    tab = <EditTaskTab handleTab={tabHook.handleTab} />;
                    break;
            case 3:
                    tab = <CreateTaskTab handleTab={tabHook.handleTab} />;
                    break;
            default:
                tab = <CreatedTasksTab handleTab={tabHook.handleTab} />;
                break;
        }
    }

    return (
        <React.Fragment>
            <Navbar />
            <Sidebar handleTab={tabHook.handleTab} />
            { tab }
        </React.Fragment>
    );
};