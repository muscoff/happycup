import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import Top from './Top';
import pic from '../Images/pic1.jpg';
import girl from '../Images/girl.png';
import ImageContent from './ImageContent';
import Footer from '../Footer';
import CrowdFunding from '../CrowdFunding';
import StartLogo from '../StartLogo';
import look from '../Images/look.jpg';
import uganda from '../Images/uganda.png';

const details = {
    pic: pic,
    title : 'reduce period poverty',
    content: 'Millions of women and girls around the world don’t have adequate access to menstrual products. With every purchase you help women and girls in Uganda access the Happy Cup as a healthy and sustainable option.'
}

const details1 = {
    pic: look,
    title: 'break the menstrual taboo',
    content: 'Insufficient knowlegde about menstruation and menstrual taboo affect menstruators worldwide. We support projects in East Africa teaching girls about their bodies and menstruation. Because the best weapon against the taboo is knowledge!'
}

const details2 = {
    pic : uganda,
    title: 'empower',
    content: ''
}

class Home extends Component{

  render(){
  return (
    <div>
        <div className="top">
            <Top backgroundImage="white-smile-background-image">
            <p className="uppercase font-70 white-text">
                For a <br />
                <span className="yellow-text">Happier</span> <br /> 
                <span className="red-text">period</span> and a <br />better <span className="green-text">world</span>
            </p>
            <p className="white-text margin-top-20 font-20">Every purchase supports and empowers women in Uganda.</p>
            </Top>
        </div>
        
        <p className="center-text font-70 uppercase margin-top-30">What we do</p>
        <div className="row margin-top-40">
            <div className="col-4">
                <ImageContent details={details} />
            </div>
            <div className="col-4">
                <ImageContent details={details1} />
            </div>
            <div className="col-4">
                <ImageContent details={details2} />
            </div>
        </div>

        <div className="margin-top-20"> 
            <Top backgroundImage="cup-background-image">
                <p className="white-text font-70 margin-bottom-20">
                <span className="white-text">The</span> <br /> <span className="yellow-text">Happy </span> 
                <span className="red-text">Cup</span></p>
                <ul className="margin-bottom-20">
                    <li className="white-text padding-top-bottom-10 yellow-hover">Highest quality silicone</li>
                    <li className="white-text padding-top-bottom-10 yellow-hover">Comes in five sizes</li>
                    <li className="white-text padding-top-bottom-10 yellow-hover">Made in the USA</li>
                    <li className="white-text padding-top-bottom-10 yellow-hover">Support Menstruators in East Africa</li>                    
                </ul>
                <button className="button-yellow">Buy Now</button>
            </Top>
        </div>

        <div className="margin-top-40 margin-bottom-30">
            <div className="width-40 margin-auto">
                <p className="uppercase font-60">Why choose a menstrual cup?</p>
                <p className="margin-top-20 font-13 grey-text">When it comes to periods, menstrual cups are the best thing ever – promise!</p>
            </div>
        </div>

        <div className="row">
            <div className="col-4">
                <div className="width-80 box-shadow-7 rounded-5 padding-all-30 right">
                    <p className="uppercase bold-text">Sustainable and cost effective</p>
                    <p className="margin-top-20 font-14 grey-text">The Happy Cup is resuable for up to 10 years – 
                        saving resources and reducing waste (and good for your wallet too!)
                    </p>

                    <p className="uppercase bold-text margin-top-40 right">Healthy and safe</p>
                    <p className="margin-top-20 font-14 right grey-text">The Happy Cup doesn’t contain any chemicals potentially harmful to your body.
                    It’s made of 100% high-quality medical grade silicone. Manufactured in the USA.
                    </p>
                </div>
            </div>
            <div className="col-4">
                <div className="width-80 margin-auto height-60">
                    <div className="img-container-80">
                        <img src={girl} className="rounded-5 translate-y-5 box-shadow-hover-7" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="width-80 box-shadow-7 rounded-5 padding-all-30 left">
                    <p className="uppercase bold-text">Comfortable to wear</p>
                    <p className="margin-top-20 font-14 grey-text">
                    The Happy Cup is made of soft silicone and very comfortable to wear. 
                    Once inserted properly, you won’t feel it at all!
                    </p>

                    <p className="uppercase bold-text margin-top-40 left">Empowering</p>
                    <p className="margin-top-20 font-14 left grey-text">
                    Using a menstrual cup means going for up to 12 hours without having to change your protection. 
                    It’s leak-free and not limiting you in any way. Have full freedom – being on your period or not.
                    </p>
                </div>
            </div>
        </div>

        <div className="margin-top-100 width-90 height-80 light-yellow-bg margin-auto">
            <div className="row">
                <div className="col-5">
                    <div className="width-100 height-80 flex-column justify-content-center align-items-center">
                        <p className="uppercase red-text">happy cup</p>
                        <p className="uppercase font-50">About us</p>
                    </div>
                </div>
                <div className="col-7">
                    <div className="width-100 height-80 flex-column justify-content-center padding-all-10">
                        <p>Let’s end period poverty and menstrual taboo together!</p>
                        <div className="margin-top-10">
                            <div className="row">
                                <div className="col-6">
                                    <p className="uppercase red-text padding-all-10">Our mission</p>
                                    <p className="padding-all-10 font-14">                      
                                        We provide women in Uganda with access to menstrual cups as a safe, 
                                        healthy and sustainable way to manage their periods.
                                        Through an educational program, we debunk menstrual myths 
                                        and fight stigma. Knowledge is power!
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="uppercase red-text padding-all-10">Our vision</p>
                                    <p className="padding-all-10 font-14">
                                        We have a vision of every menstruator having access to 
                                        safe and efficient menstrual products. We want menstruation 
                                        to be accepted by society as the normal process it is. 
                                        No more shame and stigma!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <StartLogo margin="margin-top-50"/>

        <CrowdFunding />

        <Footer />
    </div>
  );
 }
}

export default Home;
