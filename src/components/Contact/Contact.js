import React, { Component} from 'react';
import Top from '../Home/Top';
import StartLogo from '../StartLogo';
import CrowdFunding from '../CrowdFunding';
import Footer from '../Footer';
import NewsLetter from '../NewsLetter';

class Contact extends Component{
  render(){
  return (
    <div>
      <div className="top">
        <Top backgroundImage="two-sure-background-image">
          <p className="font-30 bold-text">Questions? Comments? Get in touch!</p>
          <p className="font-20 bold-text white-text">Email: info@happycup-online.com <br /> OR</p>
          <div className="margin-top-20">
            <div className="width-80">
              <input type="text" placeholder="Full Name"/>
              <input type="text" placeholder="Email" className="margin-top-10" />
              <textarea className="margin-top-10"></textarea>
              <button className="ghost margin-top-20 ">Send</button>
            </div>
          </div>
        </Top>
      </div>

      <NewsLetter position="fixed right-0 top-20 white-bg width-20"/>

      <StartLogo />

      <CrowdFunding />

      <Footer />
    </div>
  );
 }
}

export default Contact;
