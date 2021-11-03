import React from "react";
import { useHistory } from 'react-router-dom';
import SearchResults from "../SearchResults/SearchResults"


function Search() {
  const history = useHistory();

  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [countResult, setCount] = React.useState(0);



  React.useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    fetch("https://api.github.com/search/repositories?q=" + inputValue + "&per_page=20")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setCount(data.total_count)
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);


  return (
    <>
      <div className=" p-6  mt-10 max-w-2xl mx-auto bg-blue-300 rounded-xl shadow-md flex justify-center items-center space-x-4 text-align: center dark:bg-gray-800">
        <form onSubmit={evt => {
          history.push(`search?q=${evt.target.elements.query.value}`)
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}
        >
          <p className="text-center text-white text-2xl font-bold pb-6">Seacrh repositories on GitHub</p>
          <input
            className="p-3 pr-20"
            type="text"
            id="header-search"
            placeholder="Search GitHub Repositories"
            name="query"
          />
          <button className="text-white bg-blue-500 hover:bg-blue-600 p-3 dark:bg-gray-600 dark:hover:bg-gray-700" type="submit">Search</button>
        </form>
      </div>
      {isLoading &&
        <div className="flex items-center justify-center space-x-2 mt-8 animate-pulse">
          <div className="w-8 h-8 bg-blue-400 rounded-full dark:bg-gray-600"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full dark:bg-gray-600"></div>
          <div className="w-8 h-8 bg-blue-400 rounded-full dark:bg-gray-600"></div>
        </div>
      }
      {error && (
        <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
          <p className="font-bold">Informational message</p>
          <p className="text-sm">Unexpected Error Occurred fetching data. Please try again later!</p>
        </div>
      )}
      {countResult && <div className="flex justify-center mt-2 text-gray-800 dark:text-white"> Results: {countResult} </div>} 
      {repos.map((repo) => <SearchResults key={repo.id} {...repo} />) }
    </>
  )
};

export default Search;
