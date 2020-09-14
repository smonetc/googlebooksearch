import React from 'react';
import './App.css'

class Searchbar extends React.Component{
	handleSearch = (e) => {
		e.preventDefault();
		this.props.onSearchBooks(this.search.value, this.printType.value, this.bookType.value);
	}

	render(){
		return(
			<div className='searchbar'>
				<form>
					<label htmlFor='printType'>Search:</label>
					<input 
					id='search'
					type='text'
					ref = {(input) => this.search = input} 
					/>
					<button 
					type='submit' 
					className='search-btn'
					onClick={e => this.handleSearch(e)}
					>
						Search
					</button>
	
					<br />
	
					<div className='print-section'>
						<label htmlFor='printType'>Print Type:</label>
						<select id='printType' ref = {(select) => this.printType = select}>
							<option value='all'>all</option>
							<option value='books'>books</option>
							<option value='magazines'>magazines</option>
						</select>
					</div>
					<div className='book-section'>
						<label htmlFor='bookType'>Book Type:</label>
						<select id='bookType' ref = {(select) => this.bookType = select}>
							<option value=''>No Filter</option>
							<option value='partial'>partial</option>
							<option value='full'>full</option>
							<option value='free-books'>free-books</option>
							<option value='paid-books'>paid-books</option>
							<option value='ebooks'>ebooks</option>
						</select>
					</div>
		
				</form>
			</div>
		)
	}
	
}

export default Searchbar;