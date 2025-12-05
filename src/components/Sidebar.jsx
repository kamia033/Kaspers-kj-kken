import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState({});

  useEffect(() => {
    // Load all content files to build the menu
    // Structure: ../content/Book/Chapter/Page.txt or .md
    const modules = import.meta.glob('../content/**/*.{txt,md}', { query: '?raw', import: 'default' });
    const structure = {};

    for (const path in modules) {
      // Path format: ../content/Book/Chapter/Page.txt
      const parts = path.split('/');
      const fileName = parts.pop(); // Page.txt or Page.md
      const chapter = parts.pop(); // Chapter
      const book = parts.pop(); // Book
      
      const pageName = fileName.replace(/\.(txt|md)$/, '');

      if (!structure[book]) {
        structure[book] = {};
      }
      if (!structure[book][chapter]) {
        structure[book][chapter] = [];
      }
      // Avoid duplicates if both .txt and .md exist for the same page name (though unlikely/bad practice)
      if (!structure[book][chapter].includes(pageName)) {
        structure[book][chapter].push(pageName);
      }
    }

    setMenuItems(structure);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <button 
        className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`} 
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? '«' : '»'}
      </button>
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <Link to="/" className="sidebar-logo">
          KK
        </Link>
        
        <nav className="sidebar-nav">
        {Object.entries(menuItems).map(([book, chapters]) => (
          <div key={book}>
            <div className="sidebar-section-title">{book}</div>
            {Object.entries(chapters).map(([chapter, pages]) => (
              <div key={chapter} className="sidebar-chapter">
                <div className="sidebar-chapter-title">{chapter}</div>
                {pages.map((page) => (
                  <Link 
                    key={page}
                    to={`/fag/${encodeURIComponent(book)}/${encodeURIComponent(chapter)}/${encodeURIComponent(page)}`}
                    className={`sidebar-link sidebar-sublink ${isActive(`/fag/${encodeURIComponent(book)}/${encodeURIComponent(chapter)}/${encodeURIComponent(page)}`)}`}
                  >
                    {page}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? 'Lys modus ☀️' : 'Mørk modus 🌙'}
        </button>
      </div>
    </aside>
    </>
  );
}

export default Sidebar;
