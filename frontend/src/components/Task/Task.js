import React from 'react';
import Button from '../Button/Button';

export default function Task(props) {
    const data = props.task;

    const handleOpen = () => {
        localStorage.setItem('taskId', data._id);
        props.handleTab(3);
    }

    return (
        <div className={`task task--${props.color}`}>
            <h3>{ data.header }</h3>
            <p>{ data.description }</p>
            {
                props.done ? 
                    (
                        <React.Fragment>
                            <p className="task__mark">{`Бал: ${data.mark}`}</p>
                            <p className="task__date">{data.done}</p>
                        </React.Fragment>
                    ) : 
                    (
                        <React.Fragment>
                            <Button sm color={props.color} text="Виконати" onClick={handleOpen} />
                            <p className="task__date">{data.ddl}</p>
                        </React.Fragment>
                    )
            }
        </div>
    );
};