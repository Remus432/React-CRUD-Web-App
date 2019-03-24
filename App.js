import React, { Component } from "react";
import store from "./store";
import { addBook, setCurrent, editCover, updateBooks } from "./actions";
import { Route, Switch, Link } from "react-router-dom";
import uuid from "uuid";
import Main from "./components/Main";
import Add from "./components/Add";
import Edit from "./components/Edit";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentBook: {
        id: "",
        title: "",
        author: "",
        price: "",
        cover: "",
        description: ""
      }
    };
  }

  // Add New Book
  addBook = (e) => {
    // Prevent Form Submission
    e.preventDefault();

    // Create Book Object
    const currentBook = {
      id: uuid.v4(),
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      cover: URL.createObjectURL(e.target.cover.files[0]),
      description: e.target.description.value
    }

    // Dispatch AddBook
    store.dispatch(addBook(currentBook));
  }

  // Edit Book
  editBook = (e) => {
    /*// Get Current Element
    
    // Set Current Book
    this.setState({ currentBook: this.state.books[cardEl.id]});*/
const cardEl = e.target.parentElement.parentElement.parentElement;
    store.dispatch(setCurrent(cardEl.id));
  }

  // Change Cover
  changeCover = (e) => {
    // Get File Data
    const file = URL.createObjectURL(e.target.files[0]);

    // Check if not empty
    if(file !== undefined) {
      // Update Current Book Object With New Cover
      store.dispatch(editCover(file));
    }  
  }

  // Submit Edits
  submitChange = (e) => {
    // Prevent Form Submission
    e.preventDefault();
    const state = store.getState();
    
    // Create Book Object
    const currentBook = {
      id: state.currentBook.id,
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      cover: URL.createObjectURL(e.target.cover.files[0]),
      description: e.target.description.value
    }

  

    
    console.log(state.books);
    
    // Get Index Of Current Book
    state.books.forEach((item, i) => {
      // Check For ID Matchup
      if(item.id == state.currentBook.id) {
        // Replace Old Book Object
        const newBooks = state.books.splice(i, 1, currentBook);
        // Update Books
        console.log(newBooks);
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        
        <Switch>
          <Route exact path="/" render={() => <Main books={store.getState()} editBook={this.editBook}/>} />
          <Route exact path="/add" render={() => <Add addBook={this.addBook}/>} />
          <Route exact path="/edit" render={() => <Edit currentBook={store.getState().currentBook} changeCover={this.changeCover} submitChange={this.submitChange}/>} />
        </Switch>
      
      </React.Fragment>
    );
  }
}


export default App;