import React from 'react'
import styles from './_Info.module.scss'

const Info = ({ weatherData }) => {
  const temp = weatherData.main.temp
  return (
    <section className={styles.content}>
      <div className={styles.content__item}>{weatherData.name}</div>
      <div className={styles.content__item}>
        {weatherData.weather[0].description}
      </div>
      <div className={styles.content__item}>
        temp: {Math.round(temp)} &#8451;
      </div>
    </section>
  )
}

export default Info
