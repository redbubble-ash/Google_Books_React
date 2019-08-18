import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchForm(){
    return(
        <div>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter Book Title</Form.Label>
                <Form.Control type="text" placeholder="Search Book Title (requied)" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default SearchForm;
