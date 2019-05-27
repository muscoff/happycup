import React from 'react';

export default function CrowdFunding() {
    return (
        <div className="width-100 height-80 light-yellow-bg flex-column justify-content-center align-items-center">
            <p className="red-text font-50">Support our Crowdfunding campaign</p>
            <p className="grey-text margin-top-20 font-16">
            We’re launching our crowdfunding campaign in May and would love for you to be part of it.
            </p>
            <p className="grey-text margin-top-20 font-16">
            Be sure to get yourself a Happy Cup at an early bird price!
            </p>
            <p className="grey-text margin-top-20 font-16">
            As a subscriber, you’re first to know about the launch.
            </p>

            <button className="button-yellow margin-top-30 red-bg rounded-5 white-text">
                Sign up for the Mailing List
            </button>
        </div>
    );
}
