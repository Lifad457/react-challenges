import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Index from './pages/Index.jsx'
import StudyBuddy from './pages/StudyBuddy.jsx'
import RpgCharacterCreator from './pages/RpgCharacterCreator.jsx'
import MathOMatic from './pages/MathOMatic.jsx'
import OriginalCalculator from './pages/OriginalCalculator.jsx'
import Dashboard from './pages/Dashboard.jsx'
import FireStarter from './pages/FireStarter.jsx'
import AutoComplete from './pages/AutoComplete.jsx'
import BithDayCard from './pages/BirthDayCard.jsx'
import PhotoEditor from './pages/PhotoEditor.jsx'
import FingerStrengthTest from './pages/FingerStrengthTest.jsx'
import SonnetCentral from './pages/SonnetCentral.jsx'
import VirtualReality from './pages/VirtualReality.jsx'
import SketchOMatic from './pages/SketchOMatic.jsx'
import Pookemon from './pages/Pookemon.jsx'
import SpaceWarrior from './pages/SpaceWarrior.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Index />} />
    <Route path='study-buddy' element={<StudyBuddy />} />
    <Route path='character-creator' element={<RpgCharacterCreator />} />
    <Route path='math-o-matic' element={<MathOMatic />} />
    <Route path='original-calculator' element={<OriginalCalculator />} />
    <Route path='dashboard' element={<Dashboard />} />
    <Route path='fire-starter' element={<FireStarter />} />
    <Route path='autocomplete' element={<AutoComplete />} />
    <Route path='bd-card' element={<BithDayCard />} />
    <Route path='photo-editor' element={<PhotoEditor />} />
    <Route path='finger-strength' element={<FingerStrengthTest />} />
    <Route path='sonnet-central' element={<SonnetCentral />} />
    <Route path='virtual-reality' element={<VirtualReality />} />
    <Route path='sketch-o-matic' element={<SketchOMatic />} />
    <Route path='pookemon' element={<Pookemon />} />
    <Route path='space-warrior' element={<SpaceWarrior />} />

    <Route path='*' element={<h2>Not found !</h2>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
