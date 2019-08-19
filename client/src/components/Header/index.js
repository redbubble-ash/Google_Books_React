import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Image from "./books.jpg"

function Header() {
    return(
        <div>
        <Nav activeKey="/books" >
        <Nav.Item>
            <Nav.Link href="/books" style={{fontWeight: "bold"}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/books" style={{fontWeight: "bold"}}>New Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Saved" style={{fontWeight: "bold"}}>Saved Books</Nav.Link>
        </Nav.Item>
        </Nav>
        <Jumbotron style = {{backgroundImage: `url(${Image})`, backgroundSize: "contain"}}>
        <h1 style={{ color: "white", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", textAlign: "Center"}}>React Google Book Search</h1>
        <h4 style={{textAlign: "Center", color: "white"}}>
        Search for and save books of interest
        </h4>
        </Jumbotron>
        </div>
        );
}

export default Header;
