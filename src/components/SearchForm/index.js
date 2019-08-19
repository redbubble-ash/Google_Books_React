import React from "react";
import Form from 'react-bootstrap/Form';


function SearchForm(props){
    return(
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{fontWeight: "bold"}}>Enter Book Title</Form.Label>
                <Form.Control size="lg" type="text" placeholder="Search Book Title (requied)" {...props} />
            </Form.Group>
            </Form>
    )
}

export default SearchForm;
