import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TripPlannerRouter from './components/TripPlannerRouter'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <TripPlannerRouter />
  </StrictMode>,
)
