import React from 'react';
import './Forecast.scss';
import DailyForecast from '../DailyForecast/DailyForecast';
import Next2Days from '../Next2Days/Next2Days';
import { useMachine } from '@xstate/react';
import { toggleViews } from '../machines/machine';

const Forecast = ({ content }) => {
    const [current, send] = useMachine(toggleViews);

    return (
        <div className="container">
            <div className="my-5">
                <h3>Veðurspá</h3>
                <h3 className="display-3">{content.name}</h3>
            </div>
            <div className="btn-holder">
                <button type="button" className={current.matches("week") ? "active" : ""} onClick={() => { send("TOGGLE_WEEK"); }}>Komandi vika</button>
                <button type="button" className={current.matches("twoDays") ? "active" : ""} onClick={() => { send("TOGGLE_DAYS"); }}>Næstu 2 dagar</button>
            </div>

            {current.matches("week") && (
                <DailyForecast content={content} />
            )}
            {current.matches("twoDays") && (
                <Next2Days content={content} />
            )}
        </div>
    );
}

export default Forecast;
