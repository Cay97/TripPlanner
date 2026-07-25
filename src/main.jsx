import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TripPlannerRouter from './components/TripPlannerRouter'
//import 'bootstrap/dist/css/bootstap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TripPlannerRouter />
  </StrictMode>,
)
