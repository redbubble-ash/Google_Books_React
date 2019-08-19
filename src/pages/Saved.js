import React, {Component} from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchButton from "../components/SearchButton";



class Saved extends Component {

    state = {
        books: [],
        target: "",
        ifResults: false
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