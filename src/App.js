import React, {Component} from 'react'
import {Header} from './Header'
import Searchbar from './Searchbar'
import Booklist from './Booklist'
import './App.css'

class App extends Component{

  state = {
          books: [],
          error: null,
      }
  
  searchBooks = (search, printType, bookType) => {
      const api_key = 'AIzaSyAwJufUZkG0V-2P8OSVpB_AjpF23lPxtts'
      const url = (bookType) ? 
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&filter=${bookType}&key=${api_key}`
      :  `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${printType}&key=${api_key}`
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong! Please try again!')
        }
        return res.json()
      })
      .then(data => 
        this.setState(
          { 
          books: data.items,
          error:null,
        })
        )
      .catch(err => {
          console.log(err)
      });
  }

  render(){
    
      const bookComponent = this.state.books.map(book =>  <Booklist key={book.id} books={book}/>)

      return(
          <div>
            <Header />
            <Searchbar 
            onSearchBooks={(search, printType, bookType) => this.searchBooks(search, printType,bookType)}
            />
           {bookComponent} 
          </div>
      )
  }
}

export default App;