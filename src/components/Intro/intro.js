import React from 'react'
import './intro.css';
import bg  from '../../assets/Image (1).jpeg'
// import { Link } from 'react-scroll';
// import btnImg from '../../assets/hireme.png'


const Intro = () => {
  return (
   <section id="intro">
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Vanshika Assudani</span><br/>Data Enthusiast | <a className='linkCloud' href='https://www.credly.com/badges/9e946d7b-0bc5-4b78-9ac0-e722455a2554/linked_in?t=rlw86p'>AWS Certified | </a> 
        <a className='linkCloud' href='https://bcert.me/sxfkmtryu'>Scrum Master</a>
        </span>
        <p className='introPara'>
        I enjoy exploring data to derive insights that guide business decisions and enhance operational efficiency. 
        <br/>
        My extensive expertise in data analysis and visualization empowers me to uncover trends, patterns,  
        <br/>
        and strategic openings within vast and intricate datasets.
        </p>
        {/* <Link><button className='btn'><img className='btnImg' src={btnImg} alt=''/>Hire me</button></Link> */}
    </div> 
    <img src={bg}  alt='Profile' className='bg'/>
   </section>
  )
}

export default Intro