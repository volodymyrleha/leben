import React from 'react';
import Module from '../Module/Module';

import RequirementsPhoto from '../../images/requirements.jpg';
import ModellingPhoto from '../../images/modelling.png';
import TestingPhoto from '../../images/testing.jpg';
import CodingPhoto from '../../images/coding.jpg';

export default function ModulesContainer(props) {
    const openModule = () => {
        props.handleTab(2);
    }

    const moduleData = [{ 
            text: 'Визначення Вимог',
            photo: RequirementsPhoto,
            onClick: openModule
        }, { 
            text: 'Моделювання',
            photo: ModellingPhoto,
            onClick: openModule
        }, { 
            text: 'Кодування', 
            photo: CodingPhoto,
            onClick: openModule
        }, { 
            text: 'Тестування',
            photo: TestingPhoto,
            onClick: openModule
        }
    ];

    return (
        <div className="modulescontainer">
            {
                moduleData.map((item, index) => <Module key={index} module={item} />)
            }
        </div>
    );
};