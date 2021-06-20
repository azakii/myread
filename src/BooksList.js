import React from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
// import * as BooksAPI from './utils/BooksAPI'
import PropTypes from 'prop-types';

const BooksList = (props) => {
const { books, handleShelfChange } = props;
  // let currentlyReadingShelf = books.filter(b=>b.shelf === "currentlyReading");
  // let wantToReadShelf = books.filter(b=>b.shelf === "wantToRead");
  // let readShelf = books.filter(b=>b.shelf === "read");

  const shelves = [
    {
      title: 'Currently Reading',
      shelf: 'currentlyReading',
      books : books.filter(b=>b.shelf === "currentlyReading")
    },
    {
      title: 'Want to Read',
      shelf: 'wantToRead',
      books : books.filter(b=>b.shelf === "wantToRead")
    },
    {
      title: 'Read',
      shelf: 'read',
      books: books.filter(b=>b.shelf === "read")
    }
  ];
  
  return (
    <>
       <div className="list-books">
              <div className="list-books-title">
                  <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
              {shelves.map(item =>  (
                <BookShelf 
                    key = {item.shelf}
                    shelfTitle= {item.title}
                    books= {item.books}
                    shelf = {item.shelf}
                    handleShelfChange = {handleShelfChange}
                />
              ))}
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