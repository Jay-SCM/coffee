// ForLoop.jsx
import React from 'react';
import '../styles/CodeSnippet.css';
const ForLoop = () => {
    const codeSnippet = `
    for (let i = 0; i < 10; i++) {
      console.log("i is " + i);
    }
    for (let i = 0; i < myList.length; i++) {
      alert("I have " + myList[i] + " in my shopping bag");
    }
  `;
    return (
        <div className="code-snippet">
            <h1 className="snippet-title">For Loop</h1>
            <pre>{codeSnippet}</pre>
        </div>);};
export default ForLoop;