import React,{useRef} from 'react'
import './contact.css';
import LinkedIn from '../../assets/download (1).png';
import Github from '../../assets/github-icon-38987.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a12xira', 'template_nuiq3vn', form.current, 'pZoTR2Pp57hGU1EHU')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent')
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='conatctPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
            <form ref={form} className='contactForm' onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your name' name='your_name'/>
                <input type="email" className="email" placeholder='Your email' name='from_email'/>
                <textarea name='message' className='msg' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                <a href="https://www.linkedin.com/in/vassudani/" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="linkedin" className="link"/></a>
                <a href="https://github.com/Vanshika-8/Assignment-3/tree/master" target="_blank" rel="noreferrer">
                <img src={Github} alt="linkedin" className="link"/></a>
                </div>
            </form>

            
        </div>
    </section>
  )
}

export default Contact