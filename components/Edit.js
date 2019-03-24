import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Link } from "react-router-dom";

const Edit = (props) => {
  const { title, author, price, cover, description } = props.currentBook;
  console
  
  return (
    <div>
      <Link to="/">Go Back</Link>
      <Container>
        <Form className="form" onSubmit={props.submitChange}>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Book Title</InputGroupAddon>
          <Input className="input" name="title" defaultValue={title}/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Author</InputGroupAddon>
          <Input className="input" name="author" defaultValue={author}/>
        </InputGroup>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
          <Input className="input" name="price" defaultValue={price}/>
        </InputGroup>
        <InputGroup className="input-group">
          <Label className="cover-label"><Input type="file" onChange={props.changeCover} className="input cover-input" name="cover"/>Change Cover</Label>
        </InputGroup>
        <div className="edit">
          <img className="edit-img" src={cover}/>
        </div>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend">Desription</InputGroupAddon>
          <Input type="textarea" className="input" name="description" defaultValue={description} />
        </InputGroup>
        <Button color="primary" block>Add</Button>
      </Form>
      </Container>
    </div>
  )
}


export default Edit;