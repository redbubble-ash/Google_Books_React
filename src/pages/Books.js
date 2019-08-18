import React, { Component } from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";


class Books extends Component {

    render(){
        return(
            <div>
            <Header/>
            <SearchForm/>
            </div>
        )
    }

}

export default Books;
