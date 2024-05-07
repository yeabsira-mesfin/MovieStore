import React from 'react'

const SearchBar = ({searchQuery, setSearchQuery}) => {
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    }
  return (
    <>
    <div className='search-bar'>
        <input type="text" value={searchQuery} onChange={handleInputChange} placeholder='Search Movies...' name="" id="" />
    </div>
    </>
  )
}

export default SearchBar