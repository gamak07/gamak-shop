import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ErrorBoundary} from 'react-error-boundary'
import Fallback from './ui/Fallback'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={Fallback} onReset={()=>window.location.replace('/home')}>

    <App />
    </ErrorBoundary>
  </StrictMode>,
)
