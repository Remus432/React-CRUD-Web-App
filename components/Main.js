import React from "react";
import { Button, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const Main = (props) => {
  const books = props.books.books;
  return (
    <React.Fragment>
      <Link to="/add">Add</Link>
      <Link to="/edit">Edit</Link>
      {
        books.map((item, i) => {
          const { title, author, price, cover, description } = item;
          return (
            <Card key={i} id={i} className="card">
              <CardImg top width="100%" src={cover}/>
              <CardBody className="card-body">
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
                <Link to="/edit"><Button color="success" onClick={props.editBook}>Edit</Button></Link>
              </CardBody>
            </Card>
          )
        })
      }
    </React.Fragment>
  )
}


export default Main;