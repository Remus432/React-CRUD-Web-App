import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Add = (props) => {
 
  return (
    <div>
      <Link to="/">Go Back</Link>
      <Container>
        <Form className="form" onSubmit={props.addBook}>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Book Title</InputGroupAddon>
          <Input className="input" name="title"/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Author</InputGroupAddon>
          <Input className="input" name="author"/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
          <Input className="input" name="price"/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Cover</InputGroupAddon>
          <Input type="file" className="input" name="cover"/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Desription</InputGroupAddon>
          <Input type="textarea" className="input" name="description"/>
        </InputGroup>
        <Button color="primary" block>Add</Button>
      </Form>
      </Container>
    </div>
  )
}


export default Add;