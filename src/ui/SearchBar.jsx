import { useState } from "react";
import { useProducts } from "../features/products/useProducts";
import { useSearchParams } from "react-router-dom";
import Suggestion from "./Suggestion";
import { useDetectClick } from "../hooks/useDetectClick";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const { products } = useProducts();

  const resetSearch = () => {
    setQuery("");
    setSuggestions([]);
  };
  const ref = useDetectClick(resetSearch);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery.length > 1) {
      const suggestedProducts = products.products.filter((product) =>
        product.name.toLowerCase().includes(newQuery.toLowerCase())
      );
      setSuggestions(suggestedProducts);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    setSearchParams({ query });
    resetSearch();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="relative flex items-center rounded-md shadow-sm p-2"
      ref={ref}
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className="flex-grow p-2 border-none focus:outline-none rounded-md mb:p-1 mb:rounded-none mb:rounded-l-md"
      />
      <button
        onClick={handleSearch}
        className="bg-softWhite text-black p-2 rounded-md ml-2 hover:bg-indigo-500 mb:p-1 mb:ml-0 mb:rounded-none mb:rounded-r-md mb:bg-indigo-500 mb:text-softWhite"
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <div className="absolute flex flex-col w-full max-w-md top-[3.5rem] bg-gray-600 p-5 mt-2 rounded-md shadow-lg sm:w-72 sm:left-0 sm:max-w-xs">
          {suggestions.map((suggest) => (
            <Suggestion
              key={suggest.id}
              suggest={suggest}
              onClick={resetSearch}
            />
          ))}
        </div>
      )}
      {suggestions.length === 0 && query && (
        <div className="absolute flex flex-col w-full max-w-md top-[3.5rem] bg-gray-600 p-5 mt-2 rounded-md shadow-lg sm:w-72 sm:left-0 sm:max-w-xs">
          <p className="text-softWhite">No result</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
