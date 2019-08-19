import React from "react";
import Button from 'react-bootstrap/Button';


function BookSaveBtn(props){
    return(
    <Button variant="primary" type="submit" className="btn btn-info" {...props}>
    Save
    </Button>
)
}

export default BookSaveBtn;