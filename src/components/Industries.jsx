import React from 'react';
import industryImage from '../images/industry.png';
import tranImage from '../images/Tran.png';  
import healtImage from '../images/healt.png';
import banksImage from '../images/banks.png';
import consImage from '../images/cons.png';
import nonproImage from '../images/nonpro.png';



const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
      <h3 className="section-title">HOW WE DO</h3>
            <h2 className="section-subtitle"  style={{ fontSize: '40px' }}>
                <b>Solving IT challenges in every 
                <br></br>
                industry, every day.</b></h2>
         
        <div className="row">
          <div className="col-4">
            <div className="industry-box">
              <a href="https://tecnologia.vamtam.com/industries/industry-manufacturing/">
              <div className="image-box">
              <img src={industryImage} alt="Industry & Manufacturing" className="rounded-img" />
              <span className="image-label">Industry & Manufacturing</span>
              </div>
              </a>
            </div>
        
          </div>
         
          <div className="col-4">
  <div className="industry-box">
    <a href="https://tecnologia.vamtam.com/industries/transportation-logistics/">
    <div className="image-box">
    <img src= {tranImage} alt="Transportation & Logistics" className="rounded-img" />
    <span className="image-label">Transportation & Logistics</span>
                </div>
              </a>
  </div>
</div>

<div className="col-4">
<div className="industry-box">
  <a href="https://tecnologia.vamtam.com/industries/healthcare/">
  <div className="image-box">
    <img src={healtImage} alt="Healthcare" className="rounded-img" />
    <span className="image-label">Healthcare</span>
    </div>
  </a>
</div>
</div>

<div className="col-4">
<div className="industry-box">
  <a href="https://tecnologia.vamtam.com/industries/banks-insurance/">
  <div className="image-box">
    <img src={banksImage} alt="Banks & Insurance" className="rounded-img" />
    <span className="image-label">Banks & Insurance</span>
    </div>
  </a>
</div>
</div>

<div className="col-4">
<div className="industry-box ">
  <a href="https://tecnologia.vamtam.com/industries/consulting-providers/">
  <div className="image-box">
    <img src={consImage} alt="Consulting Providers" className="rounded-img" />
    <span className="image-label">Consulting Providers</span>
    </div>
  </a>
</div>
</div>

<div className="col-4">
<div className="industry-box">
  <a href="https://tecnologia.vamtam.com/industries/non-profit/">
  <div className="image-box">
    <img src={nonproImage} alt="Non-Profit" className="rounded-img" />
    <span className="image-label">Consulting Providers</span>
    </div>
  </a>
</div>
</div>


        </div>
        <div className="row">
          <div className="col-12">
            <div className="view-all-button-container">
              <a className="view-all-link" href="https://tecnologia.vamtam.com/industries/">
                View All Industries
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
    
