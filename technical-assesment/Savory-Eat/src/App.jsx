import React, { useState, useEffect } from "react"
import "./App.css"
import Home from "./components/Home.jsx"
import AllRecepies from "./components/AllRecipies.jsx"
import axios from 'axios'

function App() {
  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await axios.get('/api/menuItems')
        setMenuItems(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchMenuItems()
  }, [])
  axios.post('/menuItems', recipeData)
  .then((response) => {
    console.log(response.data);

  })
  function Delete(recipeId) {
    axios.delete(`/api/menuItems/${recipeId}`)
      .then(response => {
      })
      .catch(error => {
  
      })
  } 
  return (
    <div className="App">
      <Home menuItems={menuItems} />
      <AllRecepies />
    </div>
  )
}
fetch('http://localhost:3000/data.json')
  .then(response => response.json())
  .then(data => {})
  .catch(error => {
    console.error('Error fetching data:', error)
  });
  export default App