import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'



function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const mainData = await axios.get(process.env.VITE_URL)
    setData(mainData.data)
    console.log(mainData)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <h1>Todos</h1>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Task</td>
            <td>Completed</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d) => {
              return (
                <tr>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{(d.completed) ? "✅" : "❌"}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
