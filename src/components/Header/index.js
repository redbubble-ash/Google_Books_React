import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from "./books.jpg"

function Header() {
    return(
        <Jumbotron style = {{backgroundImage: `url(${Image})`, backgroundSize: "contain"}}>
        <h1>Hello, world!</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
        </p>
        </Jumbotron>
        );
}

export default Header;
