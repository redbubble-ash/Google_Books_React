import React from "react";
import Button from 'react-bootstrap/Button';


function BookSaveBtn(props){
    return(
    <Button as="input" type="submit" value="Save" {...props}/>
)
}

export default BookSaveBtn;