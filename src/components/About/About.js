import React, { Component} from 'react';
import Top from '../Home/Top';
import StartLogo from '../StartLogo';
import CrowdFunding from '../CrowdFunding';
import Footer from '../Footer';
import uganda from '../Images/uganda.png';
import Approach from './Approach';
import Mission from './Mission';
import NewsLetter from '../NewsLetter';

const info = {
  title: 'Period Poverty',
  content: "Menstrual cups benefit the environment – no more monthly waste! And while this is amazing, 300 million women and girls are affected by period poverty. This means they can’t afford to buy single-use menstrual products on a regular basis. Did you know that using inadequate menstrual products – such as toilet paper, rags or leaves – can cause infections? Scientists are even suspecting a link between unhygienic menstrual protection and cervical cancer."
}

const info1 = {
  title: 'Menstrual cups as a solution',
  content: 'Menstrual cups are a great solution against period poverty. Buy one and have no recurring costs for 10 years! It often is the initial buying cost that stands in the way though. Also, in some regions menstrual cups are not yet accessible on the commercial market at all. '
}

const info2 = {
  title: 'Our approach',
  content: 'It is our goal to provide as many women as possible with access to menstrual cups. Thus in low-income countries, we sell our menstrual cup at an affordable price. That way, women across different income levels can access the cups. We support the local economies by being part of the commercial market instead of using a donation-based model. We also create employment through our direct sales approach.'
}

const mission = {
  title: 'Our Mission',
  content: 'We provide women with access to menstrual cups as a safe, healthy and sustainable way to manage their periods. Through an educational program, we debunk menstrual myths and fight stigma. Knowledge is power!'
}

const mission1 = {
  title: 'Our Vision',
  content: 'We have a vision of every menstruator having access to safe and efficient menstrual products. We want menstruation to be accepted by society as the normal process it is. No more shame and stigma!'
}

class About extends Component{

  onClick = (email) =>{
    alert(email);
  }
  render(){
  return (
    <div>
        <div className="top">
          <Top backgroundImage="ladies-background-image">
            <p className="font-40 capitalize white-text">Menstruation matters!</p>
            <p className="margin-top-20 white-text">
            On any given day, <span className="white-bg red-text bold-text italic">800 million women and girls menstruate.</span> 
            Yet, <span className="white-bg red-text">menstruation is</span> a topic <span className="white-bg red-text italic bold-text">surrounded by taboo</span> and silence in societies all over the world.
            </p>
            <p className="white-text margin-top-10">            
              Having <span className="white-bg black-text"><span className="blue-text bold-text">power</span> over one’s <span className="white-bg italic red-text bold-text">period</span> is a <span className="green-text bold-text">need</span></span>for participation in public life. 
              <span className="white-bg red-text">When not having access to <span className="italic bold-text">proper menstrual products</span>, <span className="black-text">women and girls experience great 
              <span className="bold-text red-text italic"> limitations</span></span>.</span><span className="white-bg black-text"> When <span className="black-text bold-text">poverty</span> meets lack of <span className="bold-text red-text italic">proper menstrual products</span> human rights get 
              <span className="red-text bold-text"> violated</span>.</span> Among those are the right to <span className="white-bg red-text italic bold-text">dignity</span>, the right to <span className="white-bg red-text bold-text italic">freedom from discrimination</span>, the right to 
              <span className="white-bg red-text bold-text italic"> education</span> and the right to <span className="white-bg italic red-text bold-text">health</span>.
            </p>
          </Top>
        </div>

        <div className="margin-top-50">
          <div className="row">
            <div className="col-9">
              <div className="width-80 margin-auto">
                <div className="width-40 height-1px red-bg margin-auto"></div>
                <p className="center-text grey-text font-20 margin-top-10">
                “If we are going to see real development in the world then our best investment is women!”​
                </p>
                <div className="margin-top-10"></div>
                <div className="width-40 height-1px red-bg margin-auto"></div>
              </div>

              <div className="margin-top-20">
                <div className="row">
                  <Mission details={mission} />
                  <Mission details={mission1} />
                  
                  <div className="col-12">
                    <div className="margin-top-20">
                      <div className="img-container-80 box-shadow-7">
                        <img src={uganda} alt="" />
                      </div>
                    </div>
                  </div>

                    <Approach details={info}/>
                    <Approach details={info1}/>
                    <Approach details={info2} />
                </div>
              </div>
            </div>

            <NewsLetter onClick={this.onClick} />
          </div>
        </div>

        <StartLogo margin="margin-top-50"/>

        <CrowdFunding />

        <Footer />
    </div>
  );
 }
}

export default About;
