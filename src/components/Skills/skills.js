import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>
        </span>
        <div className='skillBars'>
            <div className='skillBar'>
                 <img className='skillBarImg' src={UIDesign} alt='UIDesign'/>
                 <div className='skillBarText'>
                    <h2>Analysis</h2>
                    <p>Demo Text,write my content here</p>
                 </div>
             </div>
             <div className='skillBar'>
                 <img className='skillBarImg' src={WebDesign} alt='WebDesign'/>
                 <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Demo Text,write my content here </p>
                 </div>
             </div>
             <div className='skillBar'>
                 <img className='skillBarImg' src={AppDesign} alt='AppDesign'/>
                 <div className='skillBarText'>
                    <h2>Application design</h2>
                    <p>Demo Text,write my content here </p>
                 </div>
             </div>
        </div>
    </section>
  )
}

export default Skills