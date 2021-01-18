import React from 'react';
import Button from '../Button/Button';
import Cookies from 'universal-cookie';

export default function Task(props) {
    const data = props.task;
    const cookies = new Cookies();

    const handleOpen = () => {
        if (props.edit) {   
            cookies.set('taskId', data._id);
            cookies.set('description', data.description);
            cookies.set('etalon', data.etalon);
        } else {
            localStorage.setItem('taskId', data._id);
        }

        props.handleTab(props.edit ? 2 : 3);
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
                            <Button sm color={props.color} text={ props.edit ? 'Редагувати' : 'Виконати' } onClick={handleOpen} />
                            <p className="task__date">{data.ddl}</p>
                        </React.Fragment>
                    )
            }
        </div>
    );
};