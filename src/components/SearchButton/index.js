import React from "react";
import Button from 'react-bootstrap/Button';

function SearchButton(props){
    return(
            <Button variant="primary" type="submit" className="btn btn-info" {...props}>
                Submit
            </Button>
    )
}

export default SearchButton;
