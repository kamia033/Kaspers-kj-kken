import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import 'katex/dist/katex.min.css';
import '../components/PaperLayout.css';

function ChapterPage() {
  const { book, chapter, page } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Generate TOC
  const toc = useMemo(() => {
    if (!content) return [];
    const slugger = new GithubSlugger();
    // Split by newline, handling both \n and \r\n
    const lines = content.split(/\r?\n/);
    const headings = [];
    
    lines.forEach(line => {
      // Match headers #, ##, ### with optional leading whitespace
      const match = line.match(/^\s*(#{1,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        // Remove markdown formatting like **bold** or *italic* for the TOC text
        const cleanText = text.replace(/(\*\*|__|\*|_)/g, '');
        const slug = slugger.slug(cleanText);
        headings.push({ level, text: cleanText, slug });
      }
    });
    return headings;
  }, [content]);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        // Dynamically import all .txt files in content folder
        const modules = import.meta.glob('../content/**/*.txt', { query: '?raw', import: 'default' });
        
        // Construct the expected path
        // Note: import.meta.glob keys are relative to the current file
        // But since we are in src/pages, and content is in src/content
        // The path should be ../content/Book/Chapter/Page.txt
        
        // We need to decode URI components because URL params might be encoded
        const decodedBook = decodeURIComponent(book);
        const decodedChapter = decodeURIComponent(chapter);
        const decodedPage = decodeURIComponent(page);
        
        const path = `../content/${decodedBook}/${decodedChapter}/${decodedPage}.txt`;
        
        if (modules[path]) {
          const text = await modules[path]();
          setContent(text);
          setError(null);
        } else {
          setError('Fant ikke siden.');
          console.error(`Could not find module at path: ${path}`);
          console.log('Available modules:', Object.keys(modules));
        }
      } catch (err) {
        setError('En feil oppstod ved lasting av innhold.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [book, chapter, page]);

  if (loading) {
    return (
      <div className="paper-container">
        <div className="paper-sheet">
          <div className="loader-container">
            <div className="loader-spinner"></div>
            <div className="loader-text">Laster...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="paper-container">
        <div className="paper-sheet">
          <h1 className="paper-title">Feil</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="paper-container">
      <div className="paper-sheet">
        <h1 className="paper-title">{decodeURIComponent(page)}</h1>
        
        {toc.length > 0 && (
          <nav className="paper-toc">
            <h2>Innhold</h2>
            <ul>
              {toc.map((heading, index) => (
                <li key={index} className={`toc-level-${heading.level}`}>
                  <a href={`#${heading.slug}`}>{heading.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="paper-content">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypeSlug]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
