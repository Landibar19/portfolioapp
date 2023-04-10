import React from 'react'
import './Styles.scss';
import Typed from 'react-typed';
import AnimatedText from './AnimatedText/Presentational';

import image1 from '../../../assets/img/image.png'
import image2 from '../../../assets/img/image 5.jpg'
import image3 from '../../../assets/img/image 7.jpg'
import image4 from '../../../assets/img/image6.jpg'





const Main = () => {
  
   
  return (
    <div className='main'>
        <div>
            <div className='main_content'>
               <div>
                <div className='main_text_h2'>
                  <Typed 
                strings={["Hi! Welcome! I'm Lizander Barjamaj React Js Front-End Developer."]}
                typeSpeed={60}
                backSpeed={80}
                />
                </div>
                <div className='main_text_h3'>
                <AnimatedText text ="I like to be part of Front-End development, work on projects which 
                    develop new, stylish and inovative products 
                    that create impact on customers"/>
                </div>
                <div className='main_text_h2'>
                <Typed strings={["Want to know more about me? Check my GitHub"]}
                    typeSpeed={100}
                    backSpeed={300}
                    startDelay={10000}
                    />
                    </div>
                </div>
            
            </div>
        </div>
        <div className='main_photo'>
          <img src={image1} alt=''/>
          <img src={image2} alt=''/>
          <img src={image3} alt=''/>
          <img src={image4} alt=''/>
       
          
        </div>
        
    </div>
  )
}

export default Main;
