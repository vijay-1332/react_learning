const redux= require('redux')
const createStore=redux.createStore
const reduxThunk=require('redux-thunk').default
const applyMiddleware = redux.applyMiddleware
const {reducer} =require('./reducer')
const {fetchUserData} = require('./action')
const store=createStore(reducer,applyMiddleware(reduxThunk))
const unsubscribe = store.subscribe(()=>console.log(store.getState()))
store.dispatch(fetchUserData())
unsubscribe()

