import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const location = useLocation();

  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
  ];

  // Sample search results
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 199.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Leather Jacket",
      category: "Clothing",
      price: 299.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Bestselling Novel",
      category: "Books",
      price: 14.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Garden Tools Set",
      category: "Home & Garden",
      price: 79.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Yoga Mat",
      category: "Sports",
      price: 29.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Smart Watch",
      category: "Electronics",
      price: 249.99,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q");
    if (query) {
      setSearchQuery(query);
      // In a real application, you would fetch search results based on the query here
      // For now, we'll just filter the existing results
      const filteredResults = searchResults.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, you would typically make an API call here
    console.log("Searching for:", searchQuery);
    // For now, we'll just filter the existing results
    const filteredResults = searchResults.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  const filteredResults = searchResults.filter(
    (item) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(item.category)) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Search Results</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Section */}
        <div className="w-full md:w-1/4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Filter className="mr-2" size={20} />
              Filters
            </h2>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Categories</h3>
              {categories.map((category) => (
                <label key={category} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="flex items-center mb-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-20 p-1 border rounded"
                />
                <span className="mx-2">-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-20 p-1 border rounded"
                />
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Search and Results Section */}
        <div className="w-full md:w-3/4">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 pr-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-blue-800 text-white rounded-lg text-sm px-4 py-2 hover:bg-blue-950 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Search Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResults.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.category}</p>
                  <p className="text-blue-600 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                  <button className="mt-4 w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-950 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <X className="mx-auto h-12 w-12 text-gray-400" />
              <h2 className="mt-4 text-lg font-medium text-gray-900">
                No results found
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
