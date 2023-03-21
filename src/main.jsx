import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Parent from './Components/Parent'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API 
    (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL.
     It is the parent component used to store all other components. Route: This is a new 
     component introduced in v6 and an upgrade of the component. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
