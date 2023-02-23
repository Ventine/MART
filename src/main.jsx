import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Wrapper from "./componentes/Wrapper.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Wrapper>
              <App />
          </Wrapper>
      </BrowserRouter>
  </React.StrictMode>,
)
