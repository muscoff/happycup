import React from 'react'

export default function Footer() {
    return (
        <div className="width-100 height-60 flex-column justify-content-center light-green-bg">
        <div className="row">
            <div className="col-3">
                <div className="padding-all-30">
                    <p className="uppercase white-text font-25 bold-text">About us</p>
                    <p className="font-14 white-text margin-top-20">
                    Happy Cup is a social business, making menstrual cups available to 
                    women in East Africa at a low cost. We put a focus on education and empowerment. 
                    Buy a cup or send a donation to support our programs. 
                    Let’s end period poverty together!
                    </p>
                </div>
            </div>
            <div className="col-3">
                <div className="padding-all-30">
                    <p className="uppercase white-text font-25 bold-text">Pages</p>
                    <div className="margin-top-20">
                        <ul>
                            <li className="white-text yellow-hover">Our vision and mission</li>
                            <li className="white-text yellow-hover">Privacy Policy</li>
                            <li className="white-text yellow-hover">Terms of Service</li>
                            <li className="white-text yellow-hover">Imprint</li>
                            <li className="white-text yellow-hover">Datenschutzerklarung</li>
                            <li className="white-text yellow-hover">Impressum</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="padding-all-30">
                    <p className="uppercase white-text font-25 bold-text">Help</p>
                    <div className="margin-top-20">
                        <ul>
                            <li className="white-text yellow-hover">What is a menstrual cup</li>
                            <li className="white-text yellow-hover">Menstrual cup FAQ</li>
                            <li className="white-text yellow-hover">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-3">
            <div className="padding-all-30">
                    <p className="uppercase white-text font-25 bold-text">Social</p>
                    <div className="margin-top-20 flex-row">
                        <p className="white-text font-25 bold-text yellow-hover">f</p>
                    </div>
                </div>
            </div>            
        </div>
        </div>
    );
}
