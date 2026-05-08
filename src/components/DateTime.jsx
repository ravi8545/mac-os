import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const weekday = now.toLocaleDateString(undefined, { weekday: 'long' })
  const day = now.getDate()
  const month = now.toLocaleDateString(undefined, { month: 'long' })
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  return (
    <div>
      {weekday} {day} {month} {hours}:{minutes}
    </div>
  )
}

export default DateTime