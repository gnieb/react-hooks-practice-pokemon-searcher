import React from "react";

function Search({handleSearchResults}) {

  function handleSearchQuery (e) {
    handleSearchResults(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchQuery} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
