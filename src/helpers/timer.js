import moment from 'moment'

export const calculateIntervals = ({ days }) => {
  // months = days × 0.032855
  const months = (Number(days) * 0.032855).toFixed(0)

  // days in current month
  const daysInMonth = moment().endOf('month').diff(moment(), 'days');

  // weeks = days / 7
  const weeks = Number(days) / 7
  
  return { weeks, months, daysInMonth }
}