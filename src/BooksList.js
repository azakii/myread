import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
// import * as BooksAPI from './utils/BooksAPI'
import PropTypes from 'prop-types';

const BooksList = (props) => {
const { books, handleShelfChange } = props;
  let currentlyReadingShelf = books.filter(b=>b.shelf === "currentlyReading");
  let wantToReadShelf = books.filter(b=>b.shelf === "wantToRead");
  let readShelf = books.filter(b=>b.shelf === "read");

  return (
    <>
       <div className="list-books">
              <div className="list-books-title">
                  <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <BookShelf 
                    shelfTitle="Currently Reading"
                    name= "currentlyReading"
                    books= {currentlyReadingShelf}
                    handleShelfChange = {handleShelfChange}
                />
                <BookShelf 
                    shelfTitle="Want to Read"
                    name= "wantToRead"
                    books= {wantToReadShelf}
                    handleShelfChange = {handleShelfChange}
                />
                <BookShelf 
                    shelfTitle="Read"
                    name="read"
                    books= {readShelf}
                    handleShelfChange = {handleShelfChange}
                />
              </div>
              <div className="open-search">
                <Link to="/search">
                    Add Book
                </Link>
              </div>
        </div>
    </>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BooksList;