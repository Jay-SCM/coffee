
// CodeSnippet.jsx

import React from 'react';
import '../styles/CodeSnippet.css';

const CodeSnippet = ({ title, code }) => {

    return (
        <div className="code-snippet">
            <h1 className="snippet-title">{title}</h1>
            <pre>{code}</pre>
        </div>);};

export default CodeSnippet;