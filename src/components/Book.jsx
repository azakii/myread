import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types';

const Book = (props) => {
    
    const { book, books, shelf, handleShelfChange } = props;

    return (
        <>
        
           <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(
                        ${book.imageLinks ? book.imageLinks.smallThumbnail : ""}
                    )` }}></div>
                    <div className="book-shelf-changer">
                        <BookShelfChanger books={books} book={book} shelf ={shelf} handleShelfChange={handleShelfChange} />
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
                    
                </div>
            </li>  
        
        </>
    )
}

 Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
 }

//  handleShelfChange: PropTypes.func.isRequired   

export default Book