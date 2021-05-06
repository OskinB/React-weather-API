import React from 'react';
import './DailyForecast.scss';
import DayDisplay from '../DayDisplay/DayDisplay';

const DailyForecast = ({ content }) => {
    const days = [];
    const week = 7;
    const newData = content.forecast.slice(days.length, week);

    return (
        <div className="card-holder my-5">
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

export default DailyForecast;
