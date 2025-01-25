import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar.tsx'

function App() {


  return (
    <div className='app'>
      <NavBar />
      <main className='main' >
        <Outlet />
      </main>
    </div>
  )
}

export default App
