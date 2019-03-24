export function addBook(payload) {
  return { type: "ADD_BOOK", payload }
}

export function setCurrent(payload) {
  return { type: "SET_CURRENT", payload }
}

export function editCover(payload) {
  return { type: "EDIT_COVER", payload }
}

export function updateBooks(payload) {
  return { type: "UPDATE_BOOKS", payload }
}