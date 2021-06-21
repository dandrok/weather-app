import Search from './components/Search'
import Info from './components/Info'
import Temp from './components/Temp'
import styles from './_App.module.scss'
import { useEffect, useState } from 'react'

function App() {
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result)
          console.log(result)
        })
    }

    fetchData()
  }, [lat, long])

  return (
    <div className={styles.widthmin}>
      <section className={styles.container}>
        {typeof data.main != 'undefined' ? (
          <Info weatherData={data} />
        ) : (
          <div></div>
        )}
      </section>
    </div>
  )
}

export default App
