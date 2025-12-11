import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import GithubSlugger from 'github-slugger';
import html2pdf from 'html2pdf.js';
import 'katex/dist/katex.min.css';
import '../components/PaperLayout.css';
import ZTable from '../components/ZTable';

function ChapterPage() {
  const { book, chapter, page } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    
    // Calculate dimensions to create a single continuous page
    const pixelHeight = element.scrollHeight;
    const pixelWidth = element.offsetWidth;
    // Convert px to mm (approx 1px = 0.264583 mm) and add margins
    const mmHeight = (pixelHeight * 0.264583) + 20; 
    const mmWidth = (pixelWidth * 0.264583) + 20;

    const opt = {
      margin:       10,
      filename:     `${decodeURIComponent(page)}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: [mmWidth, mmHeight], orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

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
        // Dynamically import all .txt and .md files in content folder
        const modules = import.meta.glob('../content/**/*.{txt,md}', { query: '?raw', import: 'default' });
        
        // Construct the expected path
        // Note: import.meta.glob keys are relative to the current file
        // But since we are in src/pages, and content is in src/content
        // The path should be ../content/Book/Chapter/Page.txt or .md
        
        // We need to decode URI components because URL params might be encoded
        const decodedBook = decodeURIComponent(book);
        const decodedChapter = decodeURIComponent(chapter);
        const decodedPage = decodeURIComponent(page);
        
        const txtPath = `../content/${decodedBook}/${decodedChapter}/${decodedPage}.txt`;
        const mdPath = `../content/${decodedBook}/${decodedChapter}/${decodedPage}.md`;
        
        let path = null;
        if (modules[txtPath]) {
          path = txtPath;
        } else if (modules[mdPath]) {
          path = mdPath;
        }
        
        if (path) {
          const text = await modules[path]();
          setContent(text);
          setError(null);
        } else {
          setError('Fant ikke siden.');
          console.error(`Could not find module at path: ${txtPath} or ${mdPath}`);
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
      <div className="paper-sheet" ref={contentRef}>
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
            rehypePlugins={[rehypeKatex, rehypeSlug, rehypeRaw]}
            components={{
              div({node, className, children, ...props}) {
                if (className && className.includes('z-table')) {
                  return <ZTable>{children}</ZTable>;
                }
                return <div className={className} {...props}>{children}</div>;
              },
              img({node, ...props}) {
                return (
                  <img 
                    {...props} 
                    style={{maxWidth: '100%', height: 'auto', display: 'block', margin: '20px auto'}} 
                    onError={(e) => {
                      console.error("Image failed to load:", props.src);
                      e.target.style.border = '5px solid red';
                    }}
                  />
                );
              },
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                if (!inline && match && match[1] === 'formula') {
                  return (
                    <div className="paper-formula">
                      <div className="paper-formula-content">
                        <ReactMarkdown 
                          remarkPlugins={[remarkMath, remarkGfm]}
                          rehypePlugins={[rehypeKatex, rehypeSlug]}
                        >
                          {String(children).replace(/\n$/, '')}
                        </ReactMarkdown>
                      </div>
                    </div>
                  )
                }
                return !inline && match ? (
                  <code className={className} {...props}>
                    {children}
                  </code>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <div className="pdf-download-section" data-html2canvas-ignore="true">
          <button 
            onClick={handleDownloadPDF}
            className="pdf-download-btn"
          >
            Last ned som PDF ⬇️
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
