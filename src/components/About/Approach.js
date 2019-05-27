import React from 'react';

export default function Approach(props) {
    return (
      <div className="col-12">
        <div className="margin-top-20">
                      <div className="width-80 margin-auto padding-all-20">
                        <p className="font-30 bold-text">{props.details.title}</p>
                        <p className="grey-text margin-top-10 font-15">
                        {props.details.content}
                        </p>
                      </div>
                    </div>
      </div>
    );
}
