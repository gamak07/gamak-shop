import { useState } from "react";
import { useProducts } from '../features/products/useProducts';
import { useSearchParams } from "react-router-dom";
import Suggestion from "./Suggestion";
import { useDetectClick } from "../hooks/useDetectClick";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const { products } = useProducts();

  const resetSearch = () => {
    setQuery('')
    setSuggestions([])
  }
  const ref = useDetectClick(resetSearch)

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
    resetSearch()
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex items-center rounded-md shadow-sm p-2" ref={ref}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder="Search..."
        className="flex-grow p-2 border-none focus:outline-none rounded-md"
      />
      <button
        onClick={handleSearch}
        className="bg-softWhite text-black p-2 rounded-md ml-2 hover:bg-indigo-500"
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <div className='absolute flex flex-col min-w-[25rem] gap-5 top-[3.5rem] w-fit bg-gray-600 p-5'>
          {suggestions.map((suggest) => (
            <Suggestion key={suggest.id} suggest={suggest} onClick={resetSearch} />
          ))}
        </div>
      )}
      {suggestions.length === 0 && query && (
        <div className='absolute flex flex-col min-w-[25rem] gap-5 top-[3.5rem] w-fit bg-gray-600 p-5'>
          <p className='text-softWhite'>No result</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
