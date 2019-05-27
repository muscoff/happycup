import React from 'react';
import {NavLink} from 'react-router-dom';
import Top from './Top';

export default function RestOfTop() {
    return (
        <div>
            <Top backgroundImage="standing-background-image">
            <p className="uppercase font-40 white-text">
                Are you <br /> <span className="yellow-text font-70">aware</span> 
                <br /> of the different <span className="blue-text font-60">hormone levels</span> <br />throughout your <br />
                <span className="red-text font-60">monthly cycle?</span>
            </p>
            </Top>
            <Top backgroundImage="tea-in-bed-background-image">
                <p className="uppercase white-text font-40">
                    Did you <span className="yellow-text">know</span>  
                    <br />that your <span className="blue-text font-50">diet</span> <br /> can <span className="green-text font-50">help</span> relieve your 
                    <br /> <span className="red-text font-70">period pain?</span>
                </p>
                <p className="yellow-text margin-top-20"><NavLink to="" className="yellow-hover">Read more..</NavLink></p>
            </Top>
            <Top backgroundImage="half-body-background-image">
                <p className="font-40">How was your first period experience like?</p>
                <p className="font-20 margin-top-20">Were you <span className="yellow-text">already</span> 
                <span className="white-text"> well informed</span> about <span className="yellow-text">menstruation </span> 
                    and knew what was <span className="white-text">happening?</span></p>
            </Top>
        </div>
    )
}
