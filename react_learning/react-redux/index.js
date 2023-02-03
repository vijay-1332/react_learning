const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
const combineReducer = redux.combineReducers
const bindActionCreators = redux.bindActionCreators
const { produceItems, consumeItems, buyBooks, shellBooks } = require('./action')
const { itemReducer } = require('./itemReducer')
const { bookReducer } = require('./bookReducer')
/**subscribe store */
const rootReducer = combineReducer({
    item: itemReducer,
    book: bookReducer
})
const store = createStore(rootReducer,applyMiddleware(logger))
console.log('initial state:-', store.getState())
const unsubscribe = store.subscribe(() => {})
const actions =bindActionCreators({produceItems,consumeItems,buyBooks,shellBooks},store.dispatch)
actions.produceItems()
actions.consumeItems()
//actions.buyBooks()
actions.shellBooks()
// store.dispatch(produceItems())
// store.dispatch(produceItems())
// store.dispatch(consumeItems())
// store.dispatch(produceItems())
// store.dispatch(buyBooks())
// store.dispatch(shellBooks())
unsubscribe()