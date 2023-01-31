import React, {useState} from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'


const Footer = () => {
  const [bgColor, setBgColor] = useState('#031B34')
  const [color, setColor] = useState('#fff')

  const hoverStyles = {
    background: `${bgColor}`
  }

  const textStyles = {
    color: `${color}`
  }

  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn" style={hoverStyles} id='footer-btn'
      onMouseEnter={() => setBgColor('#fff')}
      onMouseLeave={() => setBgColor('#031B34')}
      >
        <p style={textStyles}
          onMouseEnter={() => setColor('#031B34')}
          onMouseLeave={() => setColor('#fff')}
        >Request Early Access</p>
      </div>
      </div>
      )
      }