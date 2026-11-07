import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/mona-sans/wdth.css'
import '@fontsource/jetbrains-mono/500.css'
import './index.css'
import App from './App.jsx'

// The prerendered HTML is for agents and no-JS readers; the client renders over it.
createRoot(document.getElementById('root')).render(
  <StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>,
)
