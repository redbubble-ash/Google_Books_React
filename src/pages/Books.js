import React, { Component } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import SearchButton from "../components/SearchButton";
import API from "../utils/API";


class Books extends Component {
    state = {
        title: "",
        toResults: false,
        results: []

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
                results: res.data.items
              });
            })
            .catch(err => console.log(err));
        }
      };
    

    render(){
        return(
            <div>
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

        )
    }

}

export default Books;
