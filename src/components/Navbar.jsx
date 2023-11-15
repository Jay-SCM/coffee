
// Navbar.jsx
import React from 'react';
import '../styles/Navbar.css';
// const handleSearch = (value) => {
//setSearchTerm(value);
//onSearch(value); // Propagate the search term to the parent component
// };
// console.log('Search Term:', searchTerm);
// return (
const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/">
                <img
                    src="/icon/SylvIcon.jpg"
                    alt="Sylv Icon"
                    className="icon-image"/>
            </a>
            <div className="navbar-title">CofeeBAR</div>
            {/* Removed the SearchBox component */}
            <div className="navbar-links">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 4</a>
            </div>
        </nav>);};
export default Navbar;



















// // In Navbar.jsx
// import React, { useState } from 'react';
// import SearchBox from './SearchBox';
// import '../styles/Navbar.css';
//
// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//
//     const handleSearch = (value) => {
//         setSearchTerm(value);
//     };
//
//     console.log('Search Term:', searchTerm);
//
//     return (
//         <nav className="navbar">
//             <a href="/">
//                 <img
//                     src="/icon/SylvIcon.jpg"
//                     alt="Sylv Icon"
//                     className="icon-image"
//                 />
//             </a>
//             <div className="navbar-title">CofeeBAR</div>
//             <SearchBox onSearch={handleSearch} />
//             <div className="navbar-links">
//                 <a href="#">Link 1</a>
//                 <a href="#">Link 2</a>
//                 <a href="#">Link 3</a>
//                 <a href="#">Link 4</a>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;



// // // In Navbar.jsx
//
// import React, { useState } from 'react';
// import SearchBox from './SearchBox';
// import '../styles/Navbar.css';
//
// const Navbar = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//
//
//         <nav className="navbar">
//             <a href="/">
//                 <img
//                     src="/icon/SylvIcon.jpg"
//                     alt="Sylv Icon"
//                     className="icon-image"
//                 />
//             </a>
//             <div className="navbar-title">CofeeBAR</div>
//             <SearchBox onSearch={handleSearch} />
//             <div className="navbar-links">
//                 <a href="#">Link 1</a>
//                 <a href="#">Link 2</a>
//                 <a href="#">Link 3</a>
//                 <a href="#">Link 4</a>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;



