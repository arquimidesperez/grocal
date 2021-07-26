import React from 'react'
import Flower from '../assets/images/Flowers.png';
import workFromHome from '../assets/images/Work-from-home.png';
import '../assets/css/MainContainer.css'

export default function Homepage() {
  return (
    <div class='screen-width-div'>
    <div class='green-div body-green-div'>
      <p>Do you have a passion for agriculture or
        micro-entrepreneurship?</p>
    </div>
    <img src={Flower}
        alt='Man looks at his flowers'
        class='flowers'/>
    
    <p class='p'>Lorem ipsum dolor sit amet, consectetur
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
    <div class='green-div body-green-div'>
      <p>Do you have a passion for agriculture or
        micro-entrepreneurship?</p>
    </div>
    <img src={workFromHome}
        alt='Online shopping'
        class='work-from-home'/>
    
    <p class='p'>Lorem ipsum dolor sit amet, consectetur
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
      <div class='center-div-container'>
        <button class='green-button'>Submit</button>
      </div>

  </div>
  )
}
