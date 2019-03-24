const initialState = {
  books: [],
      currentBook: {
        id: "",
        title: "",
        author: "",
        price: "",
        cover: "",
        description: ""
      }
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_BOOK":
      return {
        books: state.books.concat(action.payload),
        currentBook: {...action.payload}
      }
      break;
    case "SET_CURRENT":
      
      return {
        books: [...state.books],
        currentBook: state.books[action.payload]
      }
      break;
    case "EDIT_COVER":
  
      return {
        books: [...state.books],
        currentBook: { ...state.currentBook, cover: action.payload }
      }
      break;
    case "UPDATE_BOOKS":
      console.log("UPDATED", action.payload);
      return {
        books: [...action.payload],
        currentBook: {...state.currentBook }
      }
    default:
      return state;
  }
}


export default rootReducer;