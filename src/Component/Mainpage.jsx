import React, { useState } from 'react';
import './Mainpage.css';
import image from '../Assets/image-min.png'
import { ReactComponent as Locicon } from '../Assets/location.svg'; 
import { ReactComponent as Workicon } from '../Assets/work.svg'; 
import { ReactComponent as Right } from '../Assets/rightarrow.svg'; 

const Mainpage = () => {
  const [activeTab, setActiveTab] = useState('Buyer');

  const buyerPoints = [
    'Buyer Point 1',
    'Buyer Point 2',
    'Buyer Point 3',
  ];

  const supplierPoints = [
    'Supplier Point 1',
    'Supplier Point 2',
    'Supplier Point 3',
  ];

  const points = activeTab === 'Buyer' ? buyerPoints : supplierPoints;

  return (
    <>
    <div className='main-page'>
      <div className='image-container'>
        <img src={image} alt='Main' className='main-image' />
        <div className='gradient-overlay'></div> 
        <div className='overlay'>
          <h1 className='overlay-text1'>Are You a Supplier ?</h1>
          <h1 className='overlay-text2'>Explore Matching Opportunities.</h1>
          <div className='search-fields'>
            <div className='input-container'>
              <Locicon className='input-icon' />
              <input type='text' placeholder='Search field 1' className='search-input1' />
            </div>
            <div className='input-container'>
              <Workicon className='input-icon' />
              <input type='text' placeholder='Search field 2' className='search-input2' />
            </div>
            <button className='search-button'>Search</button>
          </div>
          <div className='bottom-text'>
            
            <h5 className='areubuyer'>Are You a Buyer?</h5>
             <h4 className='click-onthelink'>Click here if you are looking to post a requirements</h4>

          </div>
        </div>
      </div>
      </div>
      <div className='ourlocation'>
        <div className='ready-to-dive'>
          <h2 className='habot-ready'>Ready to dive to HABOT </h2>
        
         
          <h6 className='story'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams</h6>
       <div className='signuptoday'>
        <div className='text-signup'> Sign Up Today ! </div>
      <div className='arrow'><Right/></div>
        </div>
        </div>
        <div className='location-box'>
<div className='locationss'>
            <div className='location'>Abu Dhabi</div>
            <div className='location'>Dubai</div>
            <div className='location'>Sharjah & Ajman</div>
            <div className='location'>Fujairah</div>
            <div className='location'>Ras Al Khaimah</div>
            <div className='location'>Umm Al Quwain</div>

        </div>
        </div>
      </div>
      <div className="video-box">
  <div className="box- flex-container">
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/IZLp-TZyDkQ"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div className="text-container">
      <h2>
        <span
          className={`tab ${activeTab === 'Buyer' ? 'active' : ''}`}
          onClick={() => setActiveTab('Buyer')}
        >
          Buyer
        </span>
        {' '}
        <span
          className={`tab ${activeTab === 'Supplier' ? 'active' : ''}`}
          onClick={() => setActiveTab('Supplier')}
        >
          Supplier
        </span>
      </h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
<div className='suuuplier'>
<div className='Supplier'>
  <div className='inside-content'>
  <div className="findu"><h2>Let Suppliers <u>Find You</u></h2></div>    <div className='verified'><button className='verified-'>Get Verified</button></div>

  </div>
  </div>

</div>


      </>
  );
};

export default Mainpage;
