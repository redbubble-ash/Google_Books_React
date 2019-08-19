import React from "react";
import Button from 'react-bootstrap/Button';


function DeleteBtn(props){
    return(
    <Button variant="primary" type="submit" className="btn btn-info" {...props}>
    Delete
    </Button>
)
}

export default DeleteBtn;