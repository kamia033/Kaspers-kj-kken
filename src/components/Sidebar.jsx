import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GithubSlugger from 'github-slugger';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, isDarkMode, toggleDarkMode }) {
  const location = useLocation();
  const [menuItems, setMenuItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    // Load all content files to build the menu and search index
    const modules = import.meta.glob('../content/**/*.{txt,md}', { query: '?raw', import: 'default', eager: true });
    const structure = {};
    const pagesList = [];

    for (const path in modules) {
      const content = modules[path];
      // Path format: ../content/Book/Chapter/Page.txt
      const parts = path.split('/');
      const fileName = parts.pop(); 
      const chapter = parts.pop(); 
      const book = parts.pop(); 
      
      const pageName = fileName.replace(/\.(txt|md)$/, '');

      // Build Menu Structure
      if (!structure[book]) {
        structure[book] = {};
      }
      if (!structure[book][chapter]) {
        structure[book][chapter] = [];
      }
      if (!structure[book][chapter].includes(pageName)) {
        structure[book][chapter].push(pageName);
      }

      // Build Search Index
      pagesList.push({
        title: pageName,
        book,
        chapter,
        rawContent: content,
        content: content.toLowerCase(),
        path: `/fag/${encodeURIComponent(book)}/${encodeURIComponent(chapter)}/${encodeURIComponent(pageName)}`
      });
    }

    setMenuItems(structure);
    setAllPages(pagesList);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerTerm = term.toLowerCase();
    
    const results = allPages.reduce((acc, page) => {
      const titleLower = page.title.toLowerCase();
      const contentLower = page.content;
      
      let matchType = null;
      let matchIndex = -1;

      if (titleLower.includes(lowerTerm)) {
        matchType = 'title';
      } else if (contentLower.includes(lowerTerm)) {
        matchType = 'content';
        matchIndex = contentLower.indexOf(lowerTerm);
      }

      if (matchType) {
        let snippet = '';
        let slug = '';

        if (matchType === 'content') {
          // Calculate snippet
          const start = Math.max(0, matchIndex - 40);
          const end = Math.min(page.rawContent.length, matchIndex + 60);
          snippet = page.rawContent.substring(start, end)
            // Remove markdown syntax crudely if caught in the middle
            .replace(/[#*`]/g, ''); 
          
          if (start > 0) snippet = '...' + snippet;
          if (end < page.rawContent.length) snippet = snippet + '...';

          // Calculate closest header for deep linking
          const slugger = new GithubSlugger();
          const headers = [];
          const lines = page.rawContent.split(/\r?\n/);
          let charCount = 0;
          
          for (const line of lines) {
            const match = line.match(/^(#{1,6})\s+(.+)$/);
            if (match) {
              const headingText = match[2];
              // Slugger maintains state to handle duplicates, providing same output as rehype-slug
              const s = slugger.slug(headingText);
              headers.push({ idx: charCount, slug: s });
            }
            // Add line length + newline char(s). 
            // Approximation: mostly 1 char \n. 
            // Since we search in rawContent, we should match indices.
            charCount += line.length + 1; 
          }

          // Find the last header that appears before the match
          let lastHeader = null;
          for (const h of headers) {
            if (h.idx <= matchIndex) {
              lastHeader = h;
            } else {
              break;
            }
          }

          if (lastHeader) {
            slug = '#' + lastHeader.slug;
          }

        } else {
           // Title match
           // Just show beginning of file
           snippet = page.rawContent.substring(0, 80).replace(/[#*`]/g, '') + '...';
        }

        acc.push({
          ...page,
          displayText: snippet,
          fullPath: page.path + slug
        });
      }
      return acc;
    }, []);

    setSearchResults(results);
  };


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
        
        <div className="sidebar-search">
          <input 
            type="text" 
            placeholder="Søk i fagstoff..." 
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <nav className="sidebar-nav">
        {searchTerm ? (
          <div className="search-results">
            {searchResults.length > 0 ? (
              searchResults.map((page) => (
                <Link 
                  key={page.fullPath}
                  to={page.fullPath}
                  className="sidebar-link search-result-item"
                  onClick={() => setSearchTerm('')}
                >
                  <div className="result-title">{page.title}</div>
                  {page.displayText && <div className="result-snippet">{page.displayText}</div>}
                  <div className="result-meta">{page.chapter}</div>
                </Link>
              ))
            ) : (
              <div className="no-results">Ingen treff</div>
            )}
          </div>
        ) : (
          Object.entries(menuItems).map(([book, chapters]) => (
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
        ))
        )}
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
