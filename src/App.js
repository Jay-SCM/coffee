
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CodeSnippet from './components/CodeSnippet';
// import SearchBox from './components/SearchBox';
// import Navbar from './components/Navbar';
// import CodeList from './components/CodeList';
// import ForLoop from './components/ForLoop';
// import DoWhileLoop from './components/DoWhileLoop';
// import ForEachLoop from './components/ForEachLoop';
// import WhileLoop from './components/WhileLoop';
// import Pizza from './components/pizza';
// import './styles/App.css';
// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('for loop');
//   const [searchTerm, setSearchTerm] = useState('');
//
//   const codeSnippets = [
//     { title: 'For Loop', code: <ForLoop /> },
//     { title: 'While Loop', code: <WhileLoop /> },
//     { title: 'For Each Loop', code: <ForEachLoop /> },
//     { title: 'Do While Loop', code: <DoWhileLoop /> },];
//   const categories = ['for loop', 'while loop', 'for each loop', 'do while loop'];
//   const filteredCodeSnippets = codeSnippets.filter((snippet) =>
//       snippet.title.toLowerCase().includes(searchTerm.toLowerCase()));
//   return (
//
//
//       <Router>
//         <div className="app">
//           <header>
//             <Navbar />
//             <SearchBox onSearch={setSearchTerm} />
//           </header>
//           <main>
//             <Routes>
//               <Route path="/" element={
//                 <div>
//                   <CodeList categories={categories} onSelectCategory={setSelectedCategory} />
//                   <CodeSnippet
//                       title={filteredCodeSnippets[0]?.title || selectedCategory}
//                       code={filteredCodeSnippets[0]?.code || ''}/></div>} />
//               <Route path="/new-page" element={<Pizza />} />
//             </Routes>
//           </main>
//         </div>
//       </Router>);};
//
// export default App;





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
import Pizza from './components/pizza';
import Weather from './components/Weather';
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
              <Route
                  path="/"
                  element={
                    <div>
                      <CodeList categories={categories} onSelectCategory={setSelectedCategory} />
                      <CodeSnippet
                          title={filteredCodeSnippets[0]?.title || selectedCategory}
                          code={filteredCodeSnippets[0]?.code || ''}
                      />
                    </div>
                  }
              />
              <Route path="/new-page" element={<Pizza />} />
              <Route path="/weather" element={<Weather />} /> {/* update the weather route with the external page for hs */}
            </Routes>
          </main>
        </div>
      </Router>
  );
};

export default App;
