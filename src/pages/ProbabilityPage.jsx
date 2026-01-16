import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// import 'katex/dist/katex.min.css'; // Using CDN in index.html instead to fix font issues
import '../components/PaperLayout.css';
import content from '../content/sannsynlighet.txt?raw'; // Import as raw string

function ProbabilityPage() {
  return (
    <div className="paper-container">
      <div className="paper-sheet">
        <h1 className="paper-title">Matematikk S2</h1>
        <div className="paper-content">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ProbabilityPage;
