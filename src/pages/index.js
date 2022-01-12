import moment from 'moment'
import * as React from "react"
import momentTz from 'moment-timezone'
import Countdown from 'react-countdown';

import { calculateIntervals } from "../helpers/timer"

const WEDDING_DATE = '2022-10-28 00:00:00';

const IndexPage = () => {
  const renderer = (event) => {
    const { days, hours, minutes, seconds } = event
    const { months, daysInMonth } = calculateIntervals({ days })
    
    console.log('event', event)

    return (
      <span>
        {months}{' '}months{' '}
        {daysInMonth}{' '}days{' '}
        {hours}{' '}hours{' '}
        {minutes}{' '}minutes{' '}
        {seconds}{' '}seconds{' '}
        until wedding
      </span>
    )
  }

  const timezoneCorrectedData = momentTz.tz(WEDDING_DATE, 'Asia/Karachi').toDate();

  console.log('days difference', moment().diff(timezoneCorrectedData, 'days')) 

  return (
    <Countdown 
      date={timezoneCorrectedData} 
      renderer={(e) => renderer(e)} 
    />
  )
}

export default IndexPage
