import * as React from "react"
import momentTz from 'moment-timezone'
import Countdown from 'react-countdown';

import { calculateIntervals } from "../helpers/timer"

import "../styles/global.css"

const WEDDING_DATE = '2022-10-28 00:00:00';

const pageStyle = {
  background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh'
}

const counterContainer = {
  borderRadius: '1rem',
  padding: '2rem 3rem',
  minWidth: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#F5FBFF",
  boxShadow: '5px 5px 15px -5px grey',
}

const fontStyle = {
  fontSize: '2rem',
  fontFamily: 'sans-serif',
  color: '#5D536A'
}

const IndexPage = () => {
  const formatText = ({ time, text }) => (
    <span>
      {time !== 0 && (
        `${time} ${text}${time === 1 ? '' : 's'}`
      )}{' '}
    </span>
  )
  
  const renderer = (event) => {
    const { days, hours, minutes, seconds } = event
    const { months, daysInMonth } = calculateIntervals({ days })
    
    return (
      <span style={fontStyle}>
        <span>
          {formatText({ time: months, text: 'month' })}
          {formatText({ time: daysInMonth, text: 'day' })}
          {formatText({ time: hours, text: 'hour' })}
          {formatText({ time: minutes, text: 'minute' })}
          {formatText({ time: seconds, text: 'second' })}
        </span>
        <em style={{ fontSize: '1.8rem', fontWeight: '900' }}>to our wedding</em>
      </span>
    )
  }

  const timezoneCorrectedData = momentTz.tz(WEDDING_DATE, 'Asia/Karachi').toDate();

  return (
    <div style={pageStyle}>
      <div style={counterContainer}>
        <Countdown 
          date={timezoneCorrectedData} 
          renderer={(e) => renderer(e)} 
        />
      </div>
    </div>
  )
}

export default IndexPage
