import React from 'react';
import './Next2Days.scss';
import DayDisplay from '../DayDisplay/DayDisplay';

const Next2Days = ({ content }) => {
    const days = [];
    const twoDays = 2;
    const newData = content.forecast.slice(days.length, twoDays);

    return (
        <div className="card-holder">
            <div className="d-flex flex-wrap">
                {
                    newData.map((day, i) => {
                        return <DayDisplay key={i} content={day} />
                    })
                }
            </div>
        </div>
    );
}

export default Next2Days;
