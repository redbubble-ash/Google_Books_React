import React, { Component } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchButton from "../components/SearchButton";
import ListResult from "../components/ListResult";
import API from "../utils/API";
import ListGroup from "react-bootstrap/ListGroup";
import BookSaveBtn from "../components/BookSaveBtn";


class Books extends Component {
    state = {
        title: "",
        ifResults: false,
        results: [],
        books: [],
        target: "",
        message: "Simply search for books via the Google Books API"

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
        // if input: "waterfall", then the following is {"name":"title","value":"Waterfall"}
          [name]: value
        });
        // console.log('name is:'+ JSON.stringify({ name, value }))
      };

      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
    
          const title = this.state.title.trim();
    
          API.getNewBooks(title)
            .then(res => {
    
              console.log(res.data.items);
              //if input: "waterfall", then Title is:Waterfall
              console.log("Title is:" + this.state.title);

    
              this.setState({
                ifResults: true,
                results: res.data.items
              });
            })
            .catch(err => console.log(err));
        }
      };

      saveBook = book => {
        API.saveBook(book)
          .then(res => {
            // const currentBooks = this.state.books;
            // const filterBooks = currentBooks.filter(book => book.id !== res.data.id);
            this.setState({
              books: book
            });
          })
          .catch(err => console.log(err));
      }
    


    render(){
        return(
            <div className="container">
                <div >
                    <Header/>
                    <SearchForm
                    name="title"
                    value={this.state.title}
                    onChange = {this.handleInputChange}
                    />
                    <SearchButton
                    onClick={this.handleFormSubmit}
                    className="btn btn-info"
                    />
                </div>
                <div >
                <div className="col-10 col-centered card-content mb-4">
              {this.state.ifResults ?(
                <div>
                <h1 className="heading-title mx-sm-3 mb-2 text-center">Search Results</h1>
                <ListResult>
                    {this.state.results.map((book)=>(
                        <ListGroup.Item key={book.id}>
                            <div className="order-div">
                                <a 
                                href={book.volumeInfo.infoLink}
                                target={this.state.target}
                                >
                                {book.volumeInfo.title}
                                </a>
                                <p>{book.volumeInfo.authors} (Author)</p>
                                <p>
                                <img align="left" style={{paddingRight:10}}
                                    src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.authors}
                                />
                                    {book.volumeInfo.description}
                                </p>
                            </div>
                            <BookSaveBtn 
                             key={book.id}
                             btntype="info"
                             disabled={book.volumeInfo.infoLink === "/"}
                             onClick={() => this.saveBook({
                               title: book.volumeInfo.title,
                               author: book.volumeInfo.authors[0],
                               description: book.volumeInfo.description,
                               image: book.volumeInfo.imageLinks.smallThumbnail,
                               link: book.volumeInfo.infoLink,
                               _id: book.id
                             })}
                            />

                        </ListGroup.Item>


                    ))}
                </ListResult>
                </div>
                ) :(
                    <div>
                    </div>
                    

                )
                }

                </div>
                </div>


            </div>
        )
    }

}

export default Books;
