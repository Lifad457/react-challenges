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

    <Route path='*' element={<h2>Not found !</h2>} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
