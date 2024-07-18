import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const mainData = await axios.get('https://example-backend-w1pq.onrender.com/courses')
    setData(mainData.data)
    // console.log(mainData)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <h1>Corurses</h1>
      {
        data.map((d) => {
          return (<h2>{d.id}. {d.course}</h2>)

        })

      }
    </>
  )
}

export default App
