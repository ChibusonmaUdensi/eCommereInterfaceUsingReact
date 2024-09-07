import React, {useState} from 'react';
import Frame61 from '../../assets/images/Frame 61.png';
import Frame62 from '../../assets/images/Frame 62.png';
import Frame63 from '../../assets/images/Frame 63.png';
import Frame64 from '../../assets/images/Frame 64.png';
import Frame10 from '../../assets/images/Frame 10.png';
import Vector from '../../assets/images/Vector.png';
import fram from '../../assets/images/fram.png';
import Frame30 from '../../assets/images/Frame 30.png';

import './style/BrowseStyles.css'
const Styles = () => {

    
    return (
        <div>
      <div className='heroSectionBox'>
        <div className='outerContainer'>
        <h1 className='dressStyle'>BROWSE BY DRESS STYLE</h1>
            <img className='casual' src={Frame61} alt="Frame61Icon" />
           <img className='casual' src={Frame62} alt="Frame62Icon" />
        </div>
        <div className='innerContainer'>
        <img className='casual' src={Frame64} alt="Frame64Icon" />
     
        <img className='casual' src={Frame63} alt="Frame63Icon" />
      </div>
      </div>
      <div className='customers'>
        <h1 className='ourhappy'> OUR HAPPY CUSTOMERS</h1>
      </div>
      <div className='reviews'>
        <img src={Frame30} alt="Frame30Icon" />
      <div className='client'>
      <img className='reviewss' src={Frame10} alt="Frame10Icon"/>
      <h1 className='firstReview'> Sarah M. <img src={Vector} /></h1>
      <p4> "I'm blown away by the quality and style of the</p4>
        <p4> clothes I received from Shop.co. From casual </p4>
         <p4>wear to elegant dresses, every piece I've bought </p4>
         <p4>has exceeded my expectations.”</p4>
      </div>
      <div className='client'>
        <img className='reviews' src={Frame10} alt="Frame10Icon"/>
        <h1 className='secondReview'> Alex K. <img src={Vector} /></h1>
        <p4> "Finding clothes that align with my personal</p4>
        <p4> style used to be a challenge until I discovered </p4>
         <p4> Shop.co. The range of options they offer is truly </p4>
         <p4> remarkable, catering to a variety of tastes and</p4>
         <p4> occasions".</p4>
      </div>
      <div className='client'>
        <img className='reviews' src={Frame10} alt="Frame10Icon"/>
        <h1 className='thirdReview'> Emily B. <img src={Vector} /></h1>
        <p4> "As someone who's always on the lookout for</p4>
        <p4>unique fashion pieces, I'm thrilled to have  </p4>
         <p4> stumbled upon Shop.co. The selection of  </p4>
         <p4> clothes is not only diverse but also on-point  </p4>
         <p4> with the latest trends.”</p4>
      </div>
        <img src={fram} alt="framIcon" />
      </div>
  
      </div>
    )
  } 
export default Styles;
