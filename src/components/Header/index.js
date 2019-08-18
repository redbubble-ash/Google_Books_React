import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from "./books.jpg"

function Header() {
    return(
        <Jumbotron style = {{backgroundImage: `url(${Image})`, backgroundSize: "contain"}}>
        <h1 style={{ color: "white", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", textAlign: "Center"}}>React Google Book Search</h1>
        <h4 style={{textAlign: "Center", color: "white"}}>
        Search for and save books of interest
        </h4>
        </Jumbotron>
        );
}

export default Header;
