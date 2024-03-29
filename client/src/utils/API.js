import axios from "axios";

export default {
  // Gets all books
  getNewBooks: function(q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ q);
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Gets the saved book with the given id
  getSavedBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
