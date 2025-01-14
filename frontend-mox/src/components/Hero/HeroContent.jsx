import React, { useState } from "react";

const HeroContent = () => {
  // State for selected item and search query
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Store the user's input

  // Function to handle item click
  const handleItemClick = (index, text) => {
    setSelectedItem(index);
    setSearchQuery(""); // Reset search query when switching search categories
  };

  // Handle input change (search query)
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update search query as user types
  };

  return (
    <div className="flex flex-col items-center pt-[190px]">
      {/* Logo */}
      <img
        src="https://assets.moxfield.net/assets/images/title.svg"
        className="w-[429px] h-[53px] mb-2"
        alt="moxifield"
      />

      {/* Subtitle */}
      <p className="pb-4 text-white text-[22px] font-light">
        A modern deck builder for Magic: The Gathering®
      </p>

      {/* Search Section */}
      <div className="flex flex-row items-center mt-16 space-x-8 justify-evenly">
        {/* Search Label */}
        <p className="text-white">Search:</p>

        {/* Navigation Options */}
        <ul className="relative flex flex-row px-3 text-white list-none border-none rounded-full bg-purple-900/30">
          <li
            className={`px-4 py-1.5 cursor-pointer rounded-full bg-gray-800/40 ${
              selectedItem === 0 ? "border-2 border-indigo-500" : ""
            }`}
            onClick={() => handleItemClick(0, "Search Decks")} // Handle click for Decks
          >
            Decks
          </li>
          <li
            className={`px-4 py-1.5 cursor-pointer rounded-full bg-gray-800/40 ${
              selectedItem === 1 ? "border-2 border-indigo-500" : ""
            }`}
            onClick={() => handleItemClick(1, "Search Cards")} // Handle click for Cards
          >
            Cards
          </li>
          <li
            className={`px-4 py-1.5 cursor-pointer rounded-full bg-gray-800/40 ${
              selectedItem === 2 ? "border-2 border-indigo-500" : ""
            }`}
            onClick={() => handleItemClick(2, "Search Brewers")} // Handle click for Brewers
          >
            Brewers
          </li>
        </ul>

        {/* Advanced Option */}
        <p className="text-purple-500 cursor-pointer">Advanced&rarr;</p>

        {/* Search Box (Input Field) */}
      </div>
      <form className="mt-4">
        <input
          type="text"
          className="py-2 border-full rounded-lg px-4 bg-neutral-900   sm:w-2 min-w-[500px] text-white text-left"
          placeholder={
            selectedItem === 0
              ? "Search Decks"
              : selectedItem === 1
              ? "Search Cards"
              : selectedItem === 2
              ? "Search Brewers"
              : "Search..." // Default placeholder if no item is selected
          }
          value={searchQuery} // Bind value to search query state
          onChange={handleInputChange} // Update search query as user types
        />
      </form>
      <div className="flex flex-row justify-center w-full pt-8 space-x-2 text-white">
        <span className="border bg-purple-600 text-black rounded-lg p-1 text-[12px] font-bold">
          NEW
        </span>
        <p>Innistrad Remastered (released Jan 24)</p>
      </div>
    </div>
  );
};

export default HeroContent;
