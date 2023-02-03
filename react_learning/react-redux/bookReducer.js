const {BYU_BOOKS,SHELL_BOOKS} = require('./actionType')
/**state declaration */
const initialBookState = {
    books: 10
}

/**reducer function  */
const bookReducer=(state = initialBookState, action) =>{
    switch (action.type) {
        case BYU_BOOKS: return {
            ...state,
            books: state.books + 1
        }
        case SHELL_BOOKS: return {
            ...state,
            books: state.books - 1
        }
        default:
            return state 
    }
}
/**reducer function end */
module.exports={bookReducer}