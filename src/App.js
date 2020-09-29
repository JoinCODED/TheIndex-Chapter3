import React, { useState } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

function App() {
  const [currentAuthor, setAuthor] = useState(null);
  const [Authors, setAuthors] = useState(authors);

  const selectAuthor = author => {
    setAuthor(author);
    console.log(author);
  };
  const resetAuthor = () => {
    setAuthor(null);
  };
  const filterAuthors = query => {
    let newAuthors = authors.filter(
      author =>
        author.first_name.includes(query) || author.last_name.includes(query)
    );
    setAuthors(newAuthors);
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar resetAuthor={resetAuthor} />
        </div>
        <div className="content col-10">
          {currentAuthor ? (
            <AuthorDetail author={currentAuthor} />
          ) : (
            <AuthorList
              authors={Authors}
              selectAuthor={selectAuthor}
              filterAuthors={filterAuthors}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
