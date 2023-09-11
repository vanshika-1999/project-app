import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';
import BlackJack from '../../assets/blackjack icon.png'

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
                    <h2>Bank Marketing</h2>
                    <p>I embarked on a challenging data analysis project where I delved into a complex client dataset, conducting a thorough statistical analysis and classification. My goal was to enhance the predictive accuracy of identifying trustworthy customers subscribing to various financial products. Employing a range of classification models, including Decision Trees, Random Forest, K-Nearest Neighbors (KNN), and Logistic Regression, I achieved an impressive 91% accuracy rate. To begin, I imported a balanced dataset from the banking sector into a Python notebook, meticulously exploring and manipulating the data to prepare it for modeling. Leveraging essential packages such as scikit-learn's OrdinalEncoder and StandardScaler, I transformed categorical values into numeric representations and scaled the dataset appropriately. The dataset was then trained using Random Forest and Gradient Boosting (GBM) machine learning algorithms, with XGBoost serving as a vital tool for evaluating model accuracy. This project not only demonstrated my proficiency in data analysis and manipulation but also showcased my ability to apply a diverse set of machine learning techniques to real-world problems, ultimately driving accurate predictions and valuable insights.</p>
                    
                 </div>
             </div>
             <div className='skillBar'>
                 <img className='skillBarImg' src={WebDesign} alt='WebDesign'/>
                 <div className='skillBarText'>
                    <h2>Art Gallery Purchase</h2>
                    <p>I've designed and developed an online art gallery using React and JavaScript, complete with a user-friendly shopping cart, artwork descriptions, and an engaging homepage. I ensured a secure user experience with React REGEX validation and implemented reusable code blocks with useReducer() and useContext for efficient state management. This project demonstrates my proficiency in frontend development and user authentication. 
                    <a className="links" href='https://jovial-kilby-b4d89b.netlify.app/#/'>(Link)</a>
                    </p>
                 </div>
             </div>
             <div className='skillBar'>
                 <img className='skillBarImg' src={BlackJack} alt='AppDesign'/>
                 <div className='skillBarText'>
                    <h2>BlackJack Capstone</h2>
                    <p>This Python project implements a text-based Blackjack game using functions for card dealing, scoring, and game logic. It employs a random number generator for card selection and employs conditional statements to handle various game outcomes. The code uses clear screen functionality to maintain a clean interface between rounds. It offers a simple yet functional demonstration of core programming concepts, including data structures, loops, and user input processing.
                    <a className="links" href='https://replit.com/@vanshikaassudan/blackjack-final#main.py'>(Code)</a>
                    </p>
                 </div>
             </div>
        </div>
    </section>
  )
}

export default Skills