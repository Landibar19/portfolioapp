import React from 'react';
import './Styles.scss';


import image from '../../assets/img/image 2.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about_description'>
          <div >
            <h2>About me</h2>
            <p>Im a website developer from Albania.</p>
            <br></br>
            <p>I decided to change my work 3 years ago when i started studing programming.
            I have become interested in this field since always and coding is the perfect job for me. 
            My knowledges are focused in developing applications with React Js.
            Helping tech-constrained creative teams pitch & 
            deliver more ambitious brand activations and experiential software development apps to 
            their clients.
            I’ve always been someone who has both a creative and a logical side.  
            I could use my creative side to design and my logical side to code.
            As a bonus, being both designer and developer allows me to make sure no 
            detail is lost in translation.
            </p>
           
          </div>
          <div className='about_skills'>
            <h2>Skills</h2>
            <ul>
            <li>HTML</li> 
            <li>CSS</li> 
            <li>Javascript</li> 
            <li>BOOSTRAP</li> 
            <li>REACT JS</li> 
            <li>SASS</li> 
            <li>REDUX</li> 
            <li>GITHUB</li> 
            <li>SQL</li> 
            </ul>
          </div>
      </div>
      <div>
        <img src={image} alt=''/>
      </div>
    </div>
    
  )
}

export default About;
