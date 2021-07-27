import React from 'react'
import Flower from '../assets/images/Flowers.png';
import workFromHome from '../assets/images/Work-from-home.png';
import '../assets/css/Homepage.css'
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div className='screen-width-div'>

<div className='green-div green-div-margin'>
<p className='w-text'>do you have a passion for
  agriculture or micro-entrepreneurship?</p>
</div>
<div className='homepage-content-container'>

<div className='image-and-content'>

  <div className='image-container'>
  <img src={Flower}
  alt='Man looks at his flowers'
  className='flowers'/>
  </div>

  <div className='text-container'>
    <p className='b-text'>Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Proin nibh nunc, auctor ut eros eu,
  efficitur posuere velit. Ut neque quam, consequat id
  placerat ut, dignissim et risus. Morbi mattis, dolor
  nec mollis blandit, est ligula placerat nisi, vitae
  elementum diam turpis vulputate justo. Vivamus nec
  arcu erat. Praesent id interdum odio. Fusce sed dui
  lorem. Sed ut porta felis. Quisque congue risus eu
  lacus fermentum, eu interdum leo pulvinar. Quisque
  eu placerat diam. Aliquam erat volutpat. Cras interdum
  ornare tortor ut luctus. Cras luctus enim nibh, maximus
  gravida lacus molestie a. Nunc mattis elit eu maximus
  ullamcorper. Quisque porta congue congue. Praesent ultrices
  dolor quis felis blandit cursus.</p>
  </div>
  
</div>

</div>


      <br />
      
      <div className='green-div green-div-margin'>
        <p className='w-text'>do you have a passion for
          agriculture or micro-entrepreneurship?</p>
      </div>
      
      <div className='homepage-content-container'>
      
        <div className='image-and-content-2'>

          <div className='image-container'>
          <img src={workFromHome}
          alt='Man looks at his flowers'
          className='flowers'/>
          </div>
      
          <div className='text-container'>
            <p className='b-text'>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin nibh nunc, auctor ut eros eu,
          efficitur posuere velit. Ut neque quam, consequat id
          placerat ut, dignissim et risus. Morbi mattis, dolor
          nec mollis blandit, est ligula placerat nisi, vitae
          elementum diam turpis vulputate justo. Vivamus nec
          arcu erat. Praesent id interdum odio. Fusce sed dui
          lorem. Sed ut porta felis. Quisque congue risus eu
          lacus fermentum, eu interdum leo pulvinar. Quisque
          eu placerat diam. Aliquam erat volutpat. Cras interdum
          ornare tortor ut luctus. Cras luctus enim nibh, maximus
          gravida lacus molestie a. Nunc mattis elit eu maximus
          ullamcorper. Quisque porta congue congue. Praesent ultrices
          dolor quis felis blandit cursus.</p>
          </div>

        </div>
        
      </div>
      
      <div className='green-div center-container'>
      <Link to='/login' className='w-text link-font-change '>login</Link>
      </div>

      <br/>
      <br/>
      <br/>

  </div>
  )
}
