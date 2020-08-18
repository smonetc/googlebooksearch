import React from 'react'
import Bookcard from './Bookcard'

const Booklist = (props) => {
	return(
		<div className='list'>
            {
                props.books.map((book,i)=>{
                    return <Bookcard 
                    key={i}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    authur={book.volumeInfo.authors}
                    price={book.volumeInfo.retailPrice.amount}
                    description={book.volumeInfo.description}
                    />
                })
            }
		</div>
	)
}

export default Booklist;