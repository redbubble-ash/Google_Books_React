import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';


// This component exports both the List and ListItem components

function ListResult(props){
    return(
      <ListGroup>
          <ListGroup.Item>{props.children}</ListGroup.Item>
      </ListGroup>

    )
}

export default ListResult;



// export const List = ({ children }) => (
//   <ul className="list-group">{children}</ul>
// );

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }