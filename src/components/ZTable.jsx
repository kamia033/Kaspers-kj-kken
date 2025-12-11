import React, { useState, useEffect, useRef } from 'react';

const ZTable = ({ children }) => {
  const [search, setSearch] = useState('');
  const tableRef = useRef(null);

  useEffect(() => {
    if (!tableRef.current) return;
    
    // Clear previous highlights
    const highlighted = tableRef.current.querySelectorAll('.highlight-cell, .highlight-row-cell, .highlight-col-cell');
    highlighted.forEach(el => {
      el.classList.remove('highlight-cell', 'highlight-row-cell', 'highlight-col-cell');
    });

    if (!search) return;

    // Parse search input (e.g. "1,24" or "1.24")
    const normalizedSearch = search.replace(',', '.');
    const val = parseFloat(normalizedSearch);
    
    if (isNaN(val)) return;
    if (val < 0 || val > 3.99) return;

    // Format to 2 decimals to find keys
    const valStr = val.toFixed(2); // "1.24"
    const rowKey = valStr.substring(0, 3).replace('.', ','); // "1,2"
    const colKey = "0,0" + valStr.substring(3); // "0,04"
    
    // Find Row Index
    const rows = tableRef.current.querySelectorAll('tbody tr');
    let targetRowIndex = -1;
    rows.forEach((tr, idx) => {
      const firstCell = tr.querySelector('td');
      if (firstCell && firstCell.textContent.trim() === rowKey) {
        targetRowIndex = idx;
      }
    });

    // Find Col Index
    const headerCells = tableRef.current.querySelectorAll('thead th');
    let targetColIndex = -1;
    headerCells.forEach((th, idx) => {
      if (th.textContent.trim() === colKey) {
        targetColIndex = idx;
      }
    });

    // Apply highlights
    if (targetRowIndex !== -1) {
        const targetRow = rows[targetRowIndex];
        const cells = targetRow.querySelectorAll('td');
        cells.forEach((cell, idx) => {
            // Skip the first cell (header) if we want to preserve its black style, 
            // or just highlight it too. Let's highlight it differently or let CSS handle it.
            cell.classList.add('highlight-row-cell');
        });
    }

    if (targetColIndex !== -1) {
        // Highlight column in all rows
        rows.forEach(tr => {
            const cells = tr.querySelectorAll('td');
            if (cells[targetColIndex]) {
                cells[targetColIndex].classList.add('highlight-col-cell');
            }
        });
    }

    // Highlight intersection
    if (targetRowIndex !== -1 && targetColIndex !== -1) {
        const targetRow = rows[targetRowIndex];
        const cells = targetRow.querySelectorAll('td');
        if (cells[targetColIndex]) {
            cells[targetColIndex].classList.add('highlight-cell');
        }
    }

  }, [search]);

  return (
    <div className="z-table-container">
      <div className="z-search-bar">
        <label htmlFor="z-search-input">Søk etter Z-verdi: </label>
        <input 
          id="z-search-input"
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="f.eks. 1,24"
          autoComplete="off"
        />
      </div>
      <div ref={tableRef} className="z-table-wrapper z-table">
        {children}
      </div>
    </div>
  );
};

export default ZTable;
