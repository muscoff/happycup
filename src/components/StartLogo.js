import React from 'react';
import start from './Images/start.png';

export default function StartLogo(props) {
    return (
        <div className={props.margin? props.margin : ''}>
            <div className="width-100 height-70 dirty-white-bg flex-column justify-content-center align-items-center">
                <div className="img-container-auto">
                    <img src={start} alt="" />
                </div>
            </div>
        </div>
    );
}
