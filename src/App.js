// // App.jsx
// //bunch of imports
// import React, { useState } from 'react';
// import CodeSnippet from './components/CodeSnippet'; // Import CodeSnippet component
// import SearchBox from './components/SearchBox'; // Import SearchBox component
// import Navbar from './components/Navbar'; // added navbar
// import CodeList from './components/CodeList'; // added code list
// import ForLoop from './components/ForLoop'; // Import ForLoop component
// import DoWhileLoop from './components/DoWhileLoop'; // Import DoWhileLoop component
// import ForEachLoop from './components/ForEachLoop'; // Import ForEachLoop component
// import WhileLoop from './components/WhileLoop'; // Import WhileLoop component
// import NewPage from './components/NewPage'; // Import NewPage component
// import './styles/App.css'; // Import App styles
// // @#@#@#@#  end of imports @#@#@#@#@#
// //     const codeSnippets = {
// //         'for loop': ForLoop,
// //         'while loop': WhileLoop,
// //         'for each loop': ForEachLoop,
// //         'do while loop': DoWhileLoop,
// //     };
// //     const categories = ['for loop', 'while loop', 'for each loop', 'do while loop'];
// //     const SelectedComponent = codeSnippets[selectedCategory];
// //     console.log('Search Term in App:', searchTerm);
// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('for loop');
//   const [searchTerm, setSearchTerm] = useState('');
//   const codeSnippets = [
//     { title: 'For Loop', code: <ForLoop /> },
//     { title: 'While Loop', code: <WhileLoop /> },
//     { title: 'For Each Loop', code: <ForEachLoop /> },
//     { title: 'Do While Loop', code: <DoWhileLoop /> },// set of code snippets, pushed to tge card
//   ];
// //     const categories = ['for loop', 'while loop', 'for each loop', 'do while loop'];
// //     const filteredCodeSnippets = codeSnippets
// //         .filter((snippet) => snippet.title.toLowerCase().includes(searchTerm.toLowerCase()))
// //         .filter((snippet) => snippet.category === selectedCategory);
// //     console.log('Search Term in App:', searchTerm);
//   const categories = ['for loop', 'while loop', 'for each loop', 'do while loop'];
//   const filteredCodeSnippets = codeSnippets.filter((snippet) =>
//       snippet.title.toLowerCase().includes(searchTerm.toLowerCase()));
//   return (
//       <div className="app">
//         <header>
//           <Navbar />
//           <div className="search-box-container">
//             <SearchBox onSearch={setSearchTerm} />
//           </div>
//         </header>
//         <main>
//           <CodeList categories={categories} onSelectCategory={setSelectedCategory} />
//           <CodeSnippet
//               title={filteredCodeSnippets[0]?.title || selectedCategory}
//               code={filteredCodeSnippets[0]?.code || ''}/>
//         </main>
//       </div>
//   );};
// export default App;


//
///////@@@@@@@@@@@@@@@@#################@@@@@@@@@@@@###########@@@@@@@@@@#########
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeSnippet from './components/CodeSnippet';
import SearchBox from './components/SearchBox';
import Navbar from './components/Navbar';
import CodeList from './components/CodeList';
import ForLoop from './components/ForLoop';
import DoWhileLoop from './components/DoWhileLoop';
import ForEachLoop from './components/ForEachLoop';
import WhileLoop from './components/WhileLoop';
import NewPage from './components/NewPage';
import './styles/App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('for loop');
  const [searchTerm, setSearchTerm] = useState('');

  const codeSnippets = [
    { title: 'For Loop', code: <ForLoop /> },
    { title: 'While Loop', code: <WhileLoop /> },
    { title: 'For Each Loop', code: <ForEachLoop /> },
    { title: 'Do While Loop', code: <DoWhileLoop /> },
  ];

  const categories = ['for loop', 'while loop', 'for each loop', 'do while loop'];

  const filteredCodeSnippets = codeSnippets.filter((snippet) =>
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <Router>
        <div className="app">
          <header>
            <Navbar />
            <SearchBox onSearch={setSearchTerm} />
          </header>
          <main>
            <Routes>
              <Route path="/" element={
                <div>
                  <CodeList categories={categories} onSelectCategory={setSelectedCategory} />
                  <CodeSnippet
                      title={filteredCodeSnippets[0]?.title || selectedCategory}
                      code={filteredCodeSnippets[0]?.code || ''}
                  />
                </div>
              } />
              <Route path="/new-page" element={<NewPage />} />
            </Routes>
          </main>
        </div>
      </Router>
  );
};

export default App;


