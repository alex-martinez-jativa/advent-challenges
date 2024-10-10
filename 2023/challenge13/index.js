function calculateTime(deliveries) {
  const maxTime = 7 * 3600
  const delNumbers = deliveries.map((el) => {
    return el.split(':').map((item) => {
      return parseInt(item)
    })
  })

  let totalSeconds = 0
  for (let i = 0; i < delNumbers.length; i++) {
    let [h, m, s] = delNumbers[i]
    totalSeconds += h * 3600 + m * 60 + s
  }

  let checktime = maxTime - totalSeconds
  const sign = checktime > 0 ? '-' : ''
  checktime = checktime < 0 ? checktime * -1 : checktime

  const parseSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600) > 0 ? Math.floor(seconds / 3600) : 0
    seconds %= 3600
    const min = Math.abs(Math.floor(seconds / 60))
    const remainSec = seconds % 60
    let parseHours = `${sign}${String(hours).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(remainSec).padStart(2, '0')}`

    return parseHours
  }

  return parseSeconds(checktime)
}

const times = ['00:10:00', '01:00:00', '03:30:00']
const res = calculateTime(times)

console.log(res)

/**
 * 
 * 
 est: calculateTime(['00:10:00', '01:00:00', '03:30:00'])

Expected:
"-02:20:00"

Actual:
"-00:20:00"
   */
