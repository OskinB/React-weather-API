import React, { useState, useEffect } from 'react';
import './Fetch.scss';
import Forecast from '../Forecast/Forecast';

const Fetch = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://apis.is/weather/forecasts/is?stations=1")
            .then(r => r.json())
            .then(data => {
                setItems(data.results);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div>
            {
                items.map((item, i) => {
                    return <Forecast key={i} content={item} />;
                })
            }
        </div>
    );
}

export default Fetch;
