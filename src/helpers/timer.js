import moment from 'moment'

function getMonthDifference({startDate, endDate}) {
  return (
    endDate.month() -
    startDate.month() +
    12 * (endDate.year() - startDate.year())
  );
}

export const calculateIntervals = ({ timezoneCorrectedDate, days }) => {
  // months = days × 0.032855
  // const months = (Number(days) * 0.032855).toFixed(0) - 1
  const months = timezoneCorrectedDate.diff(moment(), 'months')

  // days in current month
  let daysInMonth = moment().endOf('month').diff(moment(), 'days') - 3;

  if (daysInMonth > 30) {
    daysInMonth = timezoneCorrectedDate.diff(moment(), 'days');
  }

  // weeks = days / 7
  const weeks = Number(days) / 7
  
  return { weeks, months, daysInMonth }
}