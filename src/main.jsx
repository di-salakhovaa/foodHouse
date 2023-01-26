import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Menu />
  </React.StrictMode>,
)
