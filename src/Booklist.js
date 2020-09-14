import React from 'react'
import './App.css'


 function Booklist (props) {
	return(
		<div className='list'>
            <div className='book-info'>
                <div className='description'>
                    <h3>{props.books.volumeInfo.title}</h3>
                    <p>Author: {' '} {props.books.volumeInfo.authors}</p>
                    <p>${props.books.volumeInfo.saleInfo}</p> 
                    <p>{props.books.volumeInfo.description}</p>
                </div>
                <div className='img-section'>
                    <img src={props.books.volumeInfo.imageLinks.thumbnail} />
                </div>
            </div>
            <hr />
		</div>
	)
}

//figure out how to resolve the price issue

export default Booklist;