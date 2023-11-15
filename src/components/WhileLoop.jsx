// WhileLoop.jsx
import React from 'react';
import '../styles/CodeSnippet.css';
const WhileLoop = () => {
    const codeSnippet = `
    while (condition) {
      // code to be executed
    }
  `;
    return (
        <div className="code-snippet">
            <h1 className="snippet-title">While Loop</h1>
            <pre>{codeSnippet}</pre>
        </div>);}; // end while loop
export default WhileLoop;