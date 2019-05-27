import React from 'react';

export default function Top(props) {
    return (
        <div className={"slide " + props.backgroundImage}>
            <div className="row">
                <div className="col-6">
                    <div className="width-100 height-100 flex-column justify-content-center align-items-center">
                        <div className="width-80">
                            {props.children}
                        </div>
                    </div>
                </div>
                <div className="col-6"></div>
            </div>    
            </div>
    );
}
