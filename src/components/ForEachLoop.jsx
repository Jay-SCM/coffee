// ForEachLoop.jsx
import React from 'react';
import '../styles/CodeSnippet.css';
const ForEachLoop = () => {
    const codeSnippet = `
    myArray.forEach(item => {
      // code to be executed for each item
    });
  `;
    return (
        <div className="code-snippet">
            <h1 className="snippet-title">For Each Loop</h1>
            <pre>{codeSnippet}</pre>
        </div>);};
export default ForEachLoop;