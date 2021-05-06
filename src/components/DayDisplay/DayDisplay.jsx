import React from 'react';
import './DayDisplay.scss';

const DayDisplay = ({ content }) => {
    const getImage = (condition) => {
        if (condition === "Heiðskírt") {
            return <i className='bx bxs-moon clear icon-size' ></i>
        }
        else if (condition === "Léttskýjað") {
            return <i className='bx bx-cloud cloud-light icon-size' ></i>
        }
        else if (condition === "Skýjað") {
            return <i className='bx bxs-cloud cloudy icon-size'></i>
        }
        else if (condition === "Alskýjað") {
            return <i className='bx bxs-cloud cloud-dark icon-size' ></i>
        }
        else {
            return <i className='bx bx-question-mark icon-size' ></i>
        }
    }

    return (
        <div className="m-1">
            <div className="card my-card">
                <h5 className="card-header">{content.ftime}</h5>
                <div className="card-body">
                    <div className="d-flex justify-content-center my-1">
                        {getImage(content.W)}
                    </div>
                    <div className="d-flex flex-row justify-content-around my-2">
                        <h5 className="card-text">{content.T}°</h5>
                        <h5 className="font-weight-normal">{content.W}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DayDisplay;
