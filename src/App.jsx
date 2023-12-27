import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <NavBar />
    <ItemListContainer greeting={"Utilizando greeting"}/>

  </React.StrictMode>,
)
