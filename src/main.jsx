import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/omdb.css/omdbapp.css'
import { BrowserRouter } from 'react-router-dom'
import OMDBapp from './Components/OMDBapp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <OMDBapp/>
    </BrowserRouter>
  </React.StrictMode>,
)
