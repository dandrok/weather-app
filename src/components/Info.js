import { useState, useEffect } from 'react'
import styles from './_Info.module.scss'

const Info = ({ weatherData }) => {
  const temp = weatherData.main.temp
  var todayDate = new Date().toISOString().slice(0, 10)

  const [dateState, setDateState] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000)
  }, [])

  const refresh = () => {
    window.location.reload()
  }

  return (
    <section className={styles.content}>
      <div className={styles.content__flex}>
        <div className={styles.content__item}>{weatherData.name}</div>
        <button
          className={`${styles.content__item} ${styles.content__refresh}`}
          onClick={refresh}
        >
          Refresh
        </button>
      </div>
      <div className={styles.content__flex_2}>
        <div className={styles.content__item}>
          {weatherData.weather[0].main}
        </div>
        <div className={styles.content__item}>
          Temp: {Math.round(temp)} &#8451;
        </div>
      </div>
      <div className={styles.content__flex_2}>
        <div className={styles.content__item}>
          Wind: {weatherData.wind.speed}m/s
        </div>
        <div className={styles.content__item}>
          Humidity: {weatherData.main.humidity}%
        </div>
      </div>
      <div className={styles.content__flex_2}>
        <div className={styles.content__item}>{todayDate}</div>
        <div className={styles.content__item}>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </div>
      </div>
    </section>
  )
}

export default Info
