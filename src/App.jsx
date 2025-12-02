import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import ChapterPage from './pages/ChapterPage'
import './components/PaperLayout.css'

function App() {
  const [count, setCount] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <Router>
      <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'} ${isDarkMode ? 'dark-mode' : ''}`}>
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <div className="paper-container">
                <div className="paper-sheet">
                  <h1 className="paper-title">Velkommen</h1>
                  <div className="paper-content">
                    <p>Velg et emne fra menyen til venstre for å komme i gang.</p>
                  </div>
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
