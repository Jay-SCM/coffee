
// CodeSnippet.jsx

import React from 'react';
import '../styles/CodeSnippet.css';
// import React from 'react';
// import '../styles/CodeSnippet.css';
// const CodeSnippet = ({ title, code }) => {
//     console.log('Title in CodeSnippet:', title);
//     console.log('Code in CodeSnippet:', code);
//     return (
//         <div className="code-snippet">
//             <h1 className="snippet-title">{title}</h1>
//             <div className="snippet-code">{code}</div>
//         </div>);};
//     let CodeComponent;
//     switch (title) {
//         case 'For Loop':
//             CodeComponent = ForLoop;
//             break;
//         case 'While Loop':
//             CodeComponent = WhileLoop;
//             break;
//         case 'For Each Loop':
//             CodeComponent = ForEachLoop;
//             break;
//         case 'Do While Loop':
//             CodeComponent = DoWhileLoop;
//             break;
//         default:
//             CodeComponent = null;}
const CodeSnippet = ({ title, code }) => {
//     // If a specific code snippet is provided, use that instead
//     if (code) {
//         CodeComponent = code;}
//     // Check if the title includes the search term
//     if (searchTerm && !title.toLowerCase().includes(searchTerm.toLowerCase())) {
//         CodeComponent = null;}
//     return (
//         <div className="code-snippet">
//             <h1 className="snippet-title">{title}</h1>
//             <div className="snippet-code">{CodeComponent && <CodeComponent />}</div>
//         </div>
    return (
        <div className="code-snippet">
            <h1 className="snippet-title">{title}</h1>
            <pre>{code}</pre>
        </div>);};
// const CodeSnippet = ({ title }) => {
//console.log('Title in CodeSnippet:', title);
export default CodeSnippet;