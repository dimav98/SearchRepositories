function SearchResults(repo) {
  return (
    <ul className="repo_list">
      <li key={repo.id} className="repo_item">

        <div className="max-w-2xl pb-8 py-3 px-10 bg-blue-300 shadow-lg rounded-lg my-20  space-x-4 mx-auto dark:bg-gray-800">
          <div className="flex justify-center md:justify-end -mt-12 text-center ">
            <div className="flex justify-end"> <a href={repo.owner.html_url} rel="noreferrer" target="_blank"> <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500 bg-blue-300 mx-14 dark:border-gray-300" alt="" src={repo.owner.avatar_url} />     
                <a href={repo.owner.html_url} className="text-xl font-medium text-indigo-500 dark:text-gray-300" rel="noreferrer" target="_blank" >  {repo.owner.login}</a>
            </a>
            </div>
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold dark:text-white"><a href={repo.html_url} rel="noreferrer" target="_blank"> {repo.name}</a></h2>
            <p className="mt-2 text-gray-800 dark:text-white">{repo.description}</p>
            <p className="mt-2 text-gray-800 dark:text-white">Language: {repo.language}</p>
            <p className="mt-2 text-gray-800 dark:text-white">Stargazers count: {repo.stargazers_count}</p>

          </div>
        </div>
      </li>
    </ul>
  )
}

export default SearchResults;
