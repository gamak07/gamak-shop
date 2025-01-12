import { useState } from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const initialMin = Number(searchParams.get("min")) || 0;
  const initialMax = Number(searchParams.get("max")) || 10000000;
  
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setMin(value);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setMax(value);
  };

  const handleRangeChange = (e) => {
    const value = Number(e.target.value);
    setMax(value);
  };

  const applyFilter = () => {
    searchParams.set("min", min);
    searchParams.set("max", max);
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price (#)
        </label>
        <input
          type="range"
          min={0}
          max={10000000}
          value={max}
          onChange={handleRangeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex items-center mb-4">
        <input
          type="number"
          value={min}
          onChange={handleMinChange}
          className="border rounded-md p-2 w-24 mr-2"
          placeholder="Min"
        />
        <span className="text-lg">-</span>
        <input
          type="number"
          value={max}
          onChange={handleMaxChange}
          className="border rounded-md p-2 w-24 ml-2"
          placeholder="Max"
        />
      </div>

      <Button
        className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition duration-300 w-full"
        onClick={applyFilter}
      >
        Apply
      </Button>
    </div>
  );
};

export default Filter;
