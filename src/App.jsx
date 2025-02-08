import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Files from './components/Files';
import RecycleBin from './components/RecycleBin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  const Routes = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Sidebar/><Home/></>
    },
    {
      path: '/Files',
      element: <><Navbar/><Sidebar/><Files/></>
    },
    {
      path: '/RecycleBin',
      element: <><Navbar/><Sidebar/><RecycleBin/></>
    }
  ])

  return (
    <>
      <main className="mn">
        <RouterProvider router={Routes}></RouterProvider>
      </main>
    </>
  )
}

export default App
