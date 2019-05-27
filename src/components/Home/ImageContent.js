import React from 'react';

export default function ImageContent(props) {
    return (
        <div className="width-80 margin-auto light-yellow-bg box-shadow-hover-7">
                    <div className="width-100 height-40">
                        <div className="img-container-80 translate-x-y-5">
                            { props.details.pic ? <img src={props.details.pic} alt="" /> : ''}
                        </div>
                    </div>
                    {props.details.title ? <p className="uppercase font-16 center-text margin-top-20 red-hover">{props.details.title}</p> : ''}
                    <div className="width-80 margin-auto padding-all-20">
                        <p className="grey-text">
                        {props.details.content ? props.details.content : ''}
                        </p>
                    </div>
                </div>
    );
}
