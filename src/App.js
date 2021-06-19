import React, {useState, useEffect} from 'react';
import './App.css'
import Search from './components/Search'
import BooksList from './BooksList'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'


export default function BooksApp() {

  const [books, setBooks] = useState([]);

  useEffect(() => {    
    BooksAPI.getAll().then(Books => setBooks(Books))
    .catch(err=>{
      console.log(err)
    })
  }, [])
  
  const handleShelfChange = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(() => {
      newBook.shelf = newShelf;
      // console.log('newBook :' + newBook, 'newShelf :' + newShelf)
      const updatedBooks = [...books.filter(({ id }) => id !== newBook.id), newBook]
      setBooks(updatedBooks);
      
    });
  };
  
  localStorage.setItem("newBooks", JSON.stringify(books));

  return (
      <div className="app">
          <Route exact path="/"  render={() => (
              <BooksList books={books} handleShelfChange={handleShelfChange} />
            )}/>
          <Route path="/search" render={() => (
              <Search books={books} handleShelfChange={handleShelfChange} />
            )}/>
      </div>
  )
}
