import React from 'react'
import styles from './_Info.module.scss'

const Info = ({ weatherData }) => {
  const temp = weatherData.main.temp
  return (
    <section>
      <div className={styles.test}>{weatherData.name}</div>
      <div className={styles.test}>{weatherData.weather[0].description}</div>
      <div className={styles.test}>temp: {Math.round(temp)} &#8451;</div>
    </section>
  )
}

export default Info
