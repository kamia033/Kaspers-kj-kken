import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModuleCard from './components/ModuleCard'
import Home from './pages/home'
import Sidebar from './components/Sidebar'
import ChapterPage from './pages/ChapterPage'

function App() {
  const [count, setCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="content-container">
                <h1>Kaspers Kjøkken</h1>
                <Home />
                <div className="ModuleCardContainer">
                  <Link to="/fag/Matematikk%20S2/Sannsynlighet/Introduksjon" style={{ textDecoration: 'none' }}>
                    <ModuleCard title="S2: Sannsynlighet" image={reactLogo} />
                  </Link>
                  <ModuleCard title="Informasjonsteknologi" image={reactLogo} />
                  <ModuleCard title="Test Modul" image={reactLogo} />
                </div>
              </div>
            } />
            <Route path="/fag/:book/:chapter/:page" element={<ChapterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
