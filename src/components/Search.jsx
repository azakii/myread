import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book';
import Error from './Error';


const Search = (props) => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    const {handleShelfChange } = props;

    const updateQuery = query => {
            setQuery(query)
            if(query.length === 0) {
                setBooks({books: []})
            } else {
                BooksAPI.search(query).then(searchResult => {             
                    if(searchResult && searchResult.length > 0) {
                        for(let i=0; i < searchResult.length; i++){
                            for(let b=0; b < books.length; b++) {
                                if (searchResult[i].id === books[b].id){
                                    const indexed = books.findIndex(iBook => iBook.id === searchResult[i].id) 
                                    searchResult[i].shelf = books[indexed].shelf
                                }                      
                            }
                        }                
                    }
                    setBooks(searchResult)                
                })
                .catch(err=>{
                    console.log(err)                
                })
            }
                
        }
        


    
    return (
    
        <div className="search-books">
            <div className="search-books-bar">
                        
                <div className="back">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                </div>

                <div className="search-books-input-wrapper">
                    
                    <input type="text" 
                        placeholder="Search by title or author"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />

                </div>
            </div>
            <div className="search-books-results">
                {books &&
                books.length === 0 && (
                    <Error /> 
                )}
                {books &&
                books.length > 0 && (          
                <div>
                    <h2 style={{colro:'#333', textAlign:'center'}}>Showing {books.length} matches for <span className="color-green">' {query} '</span></h2>
                    <ol className="books-grid">
                        {books.map(book => (
                                <Book
                                    key={book.id}
                                    book = {book}
                                    books = {books}
                                    handleShelfChange={handleShelfChange}
                                />
                        ))}                    
                    </ol> 
                </div>
                )}
                
                
                               
            </div>
        </div>
        
    )
}


export default Search