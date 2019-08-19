import React, {Component} from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchButton from "../components/SearchButton";
import ListResult from "../components/ListResult";
import API from "../utils/API";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteBtn from "../components/DeleteBtn";




class Saved extends Component {

    state = {
        books: [],
        target: "",
        ifResults: true
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        books: res.data,
                        target: "_blank"
                    });
                } else {
                    this.setState({
                        ifResults: true
                    });
                }

            })
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.getSavedBooks())
            .catch(err => console.log(err));
    }

    render() {
        return(
            (this.state.ifResults) ? (
                <div className="container">
                        <Header/>
                    <div>

                    <h1 className="heading-title mx-sm-3 mb-2 text-center">Saved Books</h1>
                    <ListResult>
                    {this.state.books.map((book)=>(
                        <ListGroup.Item key={book.id}>
                            <div className="order-div">
                                <a 
                                href={book.link}
                                target={this.state.target}
                                >
                                {book.title}
                                </a>
                                <p>{book.author} (Author)</p>
                                <p>
                                <img align="left" style={{paddingRight:10}}
                                    src={book.image} alt={book.title}
                                />
                                    {book.description}
                                </p>
                            </div>
                            <div className="book-btn-div">
                            <DeleteBtn
                                key={book._id + "btn"}
                                btntype="info"
                                id={book._id}
                                disabled={book.link === "/"}
                                onClick={() => this.deleteBook(book._id)}
                            />
                            </div>
                        </ListGroup.Item>


                    ))}
                </ListResult>


                    </div>
                </div>

            ):(
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
                    <h3>
                    You have no saved books. Click search bar to find some.
                    </h3>

                </div>


            )

        )
    }

}


export default Saved;