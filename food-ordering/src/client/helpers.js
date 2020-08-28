const monthsName = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const convertSecondToHours = seconds => {
  var h = Math.floor(Number(seconds) / 3600)
  var m = Math.floor((Number(seconds) % 3600) / 60)
  var s = Math.floor((Number(seconds) % 3600) % 60)

  var hDisplay = h > 0 ? `${h}h` : ''
  var mDisplay = m > 0 ? `${m}m` : ''
  return hDisplay + mDisplay + s
}

export const convertToLongDate = dateString => {
  if (!dateString) {
    return undefined
  }

  const d = new Date(dateString)
  // const h = ('0' + d.getHours()).slice(-2)
  // const min = ('0' + d.getMinutes()).slice(-2)
  // const sec = ('0' + d.getSeconds()).slice(-2)
  const day = d.getDate()
  const month = d.getMonth()
  const monthName = monthsName[month]
  const year = d.getFullYear()

  return `${day} ${monthName} ${year}`
}

export const millisToMinutesAndSeconds = millis => {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}

const countDown = setInterval((year, month, day) => {
  const endTime = new Date(year, month, day, 13, 45, 0, 0).getTime()
  const curTime = new Date().getTime()

  const remainingTime = endTime - curTime

  // If the count down is over, write some text
  if (remainingTime < 0) {
    clearInterval(countDown)
  }
}, 1000)

export const groupByNTotal = (array, key) => {
  return array.reduce((acc, item) => {
    const sortkey = item[key]
    acc[sortkey] = acc[sortkey] || []
    acc[sortkey].push(item)
    return acc
  }, {})
}
