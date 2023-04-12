import React from 'react';
import  "./Styles.scss";

import image from '../../assets/img/image.jpg'

const Portfolio = () => {

  return (
    <div className='cards'>
      <div className='cards_container'>
        <div>
          <img src={image} alt=''/>
          <h2>Portfolio Project</h2> 
          <p> Home Portfolio Projects Description Contact us form.
            This app consist in description of my stack.In there you can find description of 
            my app made with React Js and Sass for design.A contact form is designed and made 
            fully functional.Its connected with firestore for saving all data.
            Background and design are photos downloaded with all rights
            reserved by owner and with permision.
          </p> 

          <button> Go to project</button>
        </div>

        <div>
          <img src={image} alt=''/>
          <h2>Portfolio Project</h2> 
          <p> Home Portfolio Projects Description Contact us form.
            This app consist in description of my stack.In there you can find description of 
            my app made with React Js and Sass for design.A contact form is designed and made 
            fully functional.Its connected with firestore for saving all data.
            Background and design are photos downloaded with all rights
            reserved by owner and with permision.
          </p> 
          <button> Go to project</button>
        </div>
        <div>
          <img src={image} alt=''/>
          <h2>Portfolio Project</h2> 
          <p> Home Portfolio Projects Description Contact us form.
            This app consist in description of my stack.In there you can find description of 
            my app made with React Js and Sass for design.A contact form is designed and made 
            fully functional.Its connected with firestore for saving all data.
            Background and design are photos downloaded with all rights
            reserved by owner and with permision.
          </p> 
          <button> Go to project</button>
        </div>
        <div>
          <img src={image} alt=''/>
          <h2>Portfolio Project</h2> 
          <p> Home Portfolio Projects Description Contact us form.
            This app consist in description of my stack.In there you can find description of 
            my app made with React Js and Sass for design.A contact form is designed and made 
            fully functional.Its connected with firestore for saving all data.
            Background and design are photos downloaded with all rights
            reserved by owner and with permision.
          </p> 
          <button className='button'> Go to project</button>
        </div>
      </div> 
    </div>
  )
}

export default Portfolio;

