import React from 'react';

export default function Mission(props) {
    return (
        <div className="col-6">
                    <div className="width-80 margin-auto padding-all-20">
                      <p className="font-30 red-text">{props.details.title}</p>
                      <p className="grey-text font-14 margin-top-10">       
                        {props.details.content}
                      </p>
                    </div>
                  </div>
    );
}
