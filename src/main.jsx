import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Render from './Render'
import ParticlesBg from './component/ParticlesBg/ParticlesBg'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Render />
    <ParticlesBg />
  </StrictMode>,
)
