

import React from 'react';
import '../styles/CodeList.css';
const CodeList = ({ categories, onSelectCategory }) => {
    return (
        <div className="code-list">
            <h2>Categories</h2>
            <ul>
                {categories.map((category) => ( // map over the categories array
                    <li key={category} onClick={() => onSelectCategory(category)}>
                        {category}
                    </li>))}</ul>
        </div>);};
export default CodeList;
