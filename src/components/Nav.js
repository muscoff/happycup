import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <div className="fixed width-100 height-20 absolute top-0 flex-row flex-row-reverse align-items-center">
            <div className="ul-inline">
                <ul>
                    <li className="padding-right-10"><NavLink to="/" className="white-text yellow-hover">Home</NavLink></li>
                    <li className="padding-right-10"><NavLink to="/menstrual" className="white-text yellow-hover">Menstrual Cup</NavLink></li>
                    <li className="padding-right-10"><NavLink to="/about" className="white-text yellow-hover">About</NavLink></li>
                    <li className="padding-right-10"><NavLink to="/contact" className="white-text yellow-hover">Contact</NavLink></li>
                    <li className="padding-right-10"><NavLink to="shop" className="white-text yellow-hover">Buy</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
