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
        toResults: false,
        books: [],
        target: ""

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
                toResults: true,
                books: res.data.items
              });
            })
            .catch(err => console.log(err));
        }
      };
    

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Header/>
                    <SearchForm
                    name="title"
                    value={this.state.title}
                    onChange = {this.handleInputChange}
                    />
                    <SearchButton
                    onClick={this.handleFormSubmit}
                    />
                </div>
                <div className="row">
                <div className="col-10 col-centered card-content mb-4">
                <h1 className="heading-title mx-sm-3 mb-2 text-center">Search Results</h1>
                <ListResult>
                    {this.state.books.map((book,index)=>(
                        <ListGroup.Item key={book.id}>
                            <div className="order-div">
                                <a 
                                key={""+ index + book.id}
                                href={book.volumeInfo.infoLink}
                                target={this.state.target}
                                >
                                {book.volumeInfo.title}
                                </a>
                                <p>{book.volumeInfo.authors[0]} (AUTHOR)</p>
                                <p>
                                <img align="left" style={{paddingRight:10}}
                                    src={book.volumeInfo.imageLinks.smallThumbnail} alt="new"
                                />
                                    {book.volumeInfo.description}
                                </p>
                            </div>
                            <BookSaveBtn 
                             key={"" + book.id + index}
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
                </div>


            </div>
        )
    }

}

export default Books;
