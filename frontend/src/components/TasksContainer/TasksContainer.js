import React from 'react';
import Task from '../Task/Task';

export default function TasksContainer(props) {
    const getColor = index => {
        let color = "";

        switch (index % 5) {
            case 0:
                color = "violet";
                break;
            case 1:
                color = "blue";
                break;
            case 2:
                color = "darkblue";
                break;
            case 3:
                color = "green";
                break;
            case 4:
                color = "red";
                break;
            default:
                color = "blue";
                break;
        }

        return color;
    }

    return (
        <div className="taskscontainer">
            {
                props.tasks.map((item, index) => 
                    <Task key={index} task={item} color={getColor(index)} done={props.done ? true : false } />)
            }
        </div>
    );
};