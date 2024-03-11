import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <div className="container ">
    <div className="row">

<div className="col-md-6 c">
  <h1> Lean to code by watching others  </h1>
  <p> See how experienced developers solve problems in real-time Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
</div>

<div className="col-md-6">
  <App/> 
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptates iste maiores odio obcaecati aliquid ratione fuga fugit saepe esse in temporibus, quam at? Ipsum nobis officiis assumenda ipsa corrupti. </p>
</div>

    </div>
  </div>
  
  </React.StrictMode>,
)
