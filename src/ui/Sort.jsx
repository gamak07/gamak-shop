import { useSearchParams } from "react-router-dom";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSearchParams({ ...Object.fromEntries(searchParams), sort: sortValue });
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
        Sort By
      </label>
      <select
        id="sort"
        name="sort"
        className="border rounded-md p-2 w-full"
        onChange={handleSortChange}
        value={searchParams.get("sort") || ""}
      >
        <option value="">Select an option</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="quantity-asc">Quantity: Low to High</option>
        <option value="quantity-desc">Quantity: High to Low</option>
        <option value="alphabetical-asc">Alphabetical: A to Z</option>
        <option value="alphabetical-desc">Alphabetical: Z to A</option>
      </select>
    </div>
  );
};

export default Sort;
