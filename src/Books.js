import React, {Component} from 'react'
import Searchbar from './Searchbar'
import Booklist from './Booklist';

class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField:''
        }
    }

    searchBooks = (e) => {
        e.preventDefault();
        const api_key = 'AIzaSyAwJufUZkG0V-2P8OSVpB_AjpF23lPxtts'
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=${api_key}`)
        .then(response => response.json())
        .then(data => 
            {   console.log(data);
                this.setState({books:[data.body.items]})})
        .catch(err => {
            console.log(err)
        });
    }

    handleSearch = (e)=> {
     
        this.setState({searchField: e.target.value})
    }


    render(){
        return(
            <div>
                <Searchbar 
                searchBooks={this.searchBooks}
                handleSearch={this.handleSearch}/>
                <Booklist books={this.state.books}/>
            </div>
        )
    }
}

export default Books;