import React, { Component} from 'react';
import Top from '../Home/Top';
import pic from '../Images/cup.png';
import NewsLetter from '../NewsLetter';
import StartLogo from '../StartLogo';
import CrowdFunding from '../CrowdFunding';
import Footer from '../Footer';

class Menstrual extends Component{
  render(){
  return (
    <div>
      <div className="top">
        <Top backgroundImage="black-smile-background-image">
        <p className="white-text font-70">What is a <span className="red-text">menstrual</span> cup?</p>
        </Top>
      </div>

      <div className="margin-top-40">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <div className="width-100 height-70 img-container-auto">
                  <img src={pic} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="width-80 margin-auto">
                <p className="grey-text margin-top-10">A menstrual cup – or period cup – is a reusable menstrual product. 
                  You wear it inside the vagina, where it collects menstrual fluid for 
                  up to 12 hours. 
                </p>

                <p className="margin-top-30 grey-text">Upon removing the cup, you simply empty its contents, clean it and reinsert it. 
                  It’s not painful or icky at all – the first couple of times insertion might be a bit 
                  challenging, but once you get a hang of it, you’ll never look back!
                </p>

                <p className="margin-top-30 grey-text">
                Menstrual cups are not a new invention, they have actually been around since the 1930s. 
                However, it’s only been in the past 10 years or so that they’ve become a popular choice 
                for women around the world.
                </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <p className="font-30 capitalize margin-top-50 margin-bottom-30 center-text">Benefits of menstrual cups</p>

              <div className="width-80 margin-auto">
                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Economic:</span> one Happy Cup lasts for several years and saves you a lot of money over the long run compared to buying pads or tampons that you need to buy on a monthly basis
                </p>

                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Convenient:</span> Menstrual cups hold more blood than pads or tampons. You can wear the Happy Cup for up to 12 hours without changing (depending on the heaviness of your flow) – stop hunting for clean bathrooms to change your pad or tampon!
                </p>

                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Healthy:</span> Better for your body. The Happy Cup is free of dangerous additives – unlike conventional sanitary pads and tampons, which contain loads of chemicals like bleach and perfume
                </p>

                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Eco-friendly:</span> Being reusable and lasting for a long time, you’re reducing you’re reducing the amount of waste you’re producing.
                </p>

                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Empowering:</span> with the Happy Cup, you don’t experience any limitations during your period – it can’t be felt inside you and can be worn during any daily activities – even when exercising or swimming!
                </p>

                <p className="grey-text font-13 margin-bottom-20">
                <span className="grey-text bold-text font-20">Helps girls stay in school:</span> The Happy Cup is leak-free 
                and doesn’t have to be changed as frequently as any other means of protection. 
                Many schoolgirls are heavily affected by not having adequate menstrual products – they have 
                difficulties engaging in classroom activities and often times miss school and might eventually 
                even drop out of school completely. Yet – as UN Secretary UN Secretary-General Ban Ki-moon 
                said: “The greatest return comes from investing in girls and women. When they are educated, 
                they drive development in their families, communities and nations.”
                </p>
              </div>
            </div>
          </div>
          <NewsLetter />
        </div>
      </div>

      <StartLogo margin="margin-top-30" />
          <CrowdFunding />
          <Footer />
    </div>
  );
 }
}

export default Menstrual;
