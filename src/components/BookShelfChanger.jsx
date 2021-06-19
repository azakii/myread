import React from 'react'
// import * as BooksAPI from '../utils/BooksAPI'
import PropTypes from 'prop-types';



const BookShelfChanger = (props) => {
    const { book, books } = props;
    const movedToShelf = event => props.handleShelfChange(book, event.target.value);
        let currentShelf = book.shelf;

        if (!('shelf' in book)) {
            book.shelf = 'move'
        }        
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }

    return (
        <>
            <select onChange={movedToShelf} defaultValue={currentShelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </>
    )
}


BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    handleShelfChange: PropTypes.func.isRequired
};


export default BookShelfChanger

