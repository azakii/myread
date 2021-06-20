import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';



const BookShelf = (props) => {
    
    const { books, shelfTitle, handleShelfChange, shelf } = props;
    // console.log(books)
    // console.log({shelf})
    return (
        <div>
            
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map(book=>
                            <Book 
                                key={book.id}
                                books= {books}
                                book = {book}
                                shelf = {shelf}
                                handleShelfChange={handleShelfChange}
                            />
                    )}
                    </ol>
                  </div>
                </div>
                
                
        </div>
    )
}

BookShelf.propTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
}


export default BookShelf