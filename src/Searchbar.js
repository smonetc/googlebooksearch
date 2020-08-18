import React from 'react';

const Searchbar = (props) => {
	return(
		<div className='searchbar'>
			<form
			onSubmit={props.searchBooks}>
				<label>Search:</label>
				<input 
				type='text'
				onChange={props.handleSearch}/>
				<button 
				type='submit' 
				className='search-btn'>Search</button>
			</form>
		</div>
	)
}

export default Searchbar;