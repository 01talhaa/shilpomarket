'use client'
import React, {useState} from 'react'

const HeroSearchbar = () => {
      const [searchTerm, setSearchTerm] = useState("");
        const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement your search logic here
  };

  return (
<div className="relative w-full max-w-3xl mx-auto mb-12 px-4 sm:px-0"> {/* Added horizontal padding for very small screens */}
  <div className="group">
    <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl p-2 sm:p-3 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
      {/* Changed to flex-col on small screens, then back to flex-row on sm and larger */}
      <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3"> 
        {/* Search Icon - Always visible */}
        <div className=" pl-2 sm:pl-4 pt-2 sm:pt-0"> {/* Adjusted padding */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search for materials, suppliers, or categories..."
          className="flex-grow bg-transparent text-white placeholder-slate-300 px-2 sm:px-6 py-2 sm:py-3 outline-none text-sm sm:text-base md:text-lg w-full" /* w-full added to input */
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Button */}
        {/* Button now takes full width on extra small screens, then becomes auto width on sm and up */}
        <button
          onClick={handleSearch}
          className="w-auto sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium text-sm sm:text-base mt-1 sm:mt-0" /* Added mt-2 for spacing on small screens */
        >
          Search
          <svg
            className="w-3 h-3 sm:w-5 sm:h-3 ml-1 sm:ml-2" /* Adjusted icon size and margin */
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default HeroSearchbar