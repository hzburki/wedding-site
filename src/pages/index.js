import * as React from "react"
import moment from 'moment-timezone'
import Countdown from 'react-countdown';

import { calculateIntervals } from "../helpers/timer"

const WEDDING_DATE = '2022-10-28 00:00:00';

const IndexPage = () => {
  const renderer = (event) => {
    const { days, hours, minutes, seconds } = event
    const { weeks, months } = calculateIntervals({ days })
    
    console.log('event', event)

    return (
      <span>
        {months}{' '}months{' '}
        {weeks}{' '}weeks{' '}
        {days}{' '}days{' '}
        {hours}{' '}hours{' '}
        {minutes}{' '}minutes{' '}
        {seconds}{' '}seconds{' '}
        until wedding
      </span>
    )
  }

  const timezoneCorrectedData = moment.tz(WEDDING_DATE, 'Asia/Karachi').toDate();

  return (
    <Countdown 
      date={timezoneCorrectedData} 
      renderer={(e) => renderer(e)} 
    />
  )
}

export default IndexPage
