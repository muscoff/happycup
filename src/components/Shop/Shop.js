import React, { Component} from 'react';
import Top from '../Home/Top';
import NewsLetter from '../NewsLetter';
import StartLogo from '../StartLogo';
import CrowdFunding from '../CrowdFunding';
import Footer from '../Footer';

class Shop extends Component{
  onClick = (email) =>{
    alert(email);
  }
  render(){
  return (
    <div>
      <div className="top">
        <Top backgroundImage="look-background-image">
          <p className="font-60 white-text uppercase">Happy Cup shop</p>
          <p className="red-text black-bg center-text padding-all-10">The Happy Cup is not available for sale yet.</p>
          <p className="black-bg white-text padding-all-20">We will be available for sale market in a bit – Make sure to sign up for our 
            Newsletter and we’ll let you know when we’re ready to launch and make your period 
            experience a better one!
          </p>
          <p className="yellow-text font-13 margin-top-10">We need your support! Let's end period poverty together!</p>
          <p className="margin-top-20 font-30 white-text">Support Our Crowdfunding <br />Campaign!</p>
          <p className="white-text font-16 margin-top-20">
            We’re going to launch a crowdfunding campaign soon and <br /> would love for you to be part of it. <br />
            Sign up for our Email list and be first to know about the <br /> launch. Be sure to get yourself a Happy Cup at an early bird <br /> price!
          </p>
        </Top>

        <NewsLetter onClick={this.onClick} position="width-20 fixed top-20 white-bg right-0" />

        <StartLogo />

        <CrowdFunding />

        <Footer />
      </div>
    </div>
  );
 }
}

export default Shop;
