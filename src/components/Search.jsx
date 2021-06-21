import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book';
import Error from './Error';


const Search = (props) => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');
    
    const {storedBooks, shelf, handleShelfChange } = props;

    const updateQuery = query => {
            setQuery(query)
            if(query.length === 0) {
                setBooks([])
            } else {
                BooksAPI.search(query).then(searchResult => {             


                    if (searchResult && searchResult.length > 0) {
                        //     for (let i = 0; i < searchResult.length; i++) {
                        //         for (let j = 0; j < storedBooks.length; j++) {
                        //             if (searchResult[i].id === storedBooks[j].id) {
                        //                 const shelvedBookIndex = storedBooks.findIndex((book) => book.id === searchResult[i].id)
                        //                 searchResult[i].shelf = storedBooks[shelvedBookIndex].shelf
                        //             }
                        //         }
                        //     }                        
                        searchResult.map(book => (storedBooks.filter((bo) => bo.id === book.id).map(b => book.shelf = b.shelf)))

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
                                    shelf= {shelf}
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