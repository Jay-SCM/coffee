
import React from 'react';
import '../styles/CodeSnippet.css';
const DoWhileLoop = () => {
    const codeSnippet = `
    do {
      // code to be executed
    } while (condition);
  `;
    return (
        <div className="code-snippet">
            <h1 className="snippet-title">Do While Loop</h1>
            <pre>{codeSnippet}</pre>
        </div>);};
export default DoWhileLoop;