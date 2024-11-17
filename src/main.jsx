import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path='' element={<Hero></Hero>}/>
      <Route path="experience" element={<Experience></Experience>}/>
      <Route path='education' element={<Education></Education>}/>
      <Route path='project' element={<Projects></Projects>}/>
      <Route path='contact' element={<Contact></Contact>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
