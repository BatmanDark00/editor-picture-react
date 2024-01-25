import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFontAwesome, faEnvelope);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
)
