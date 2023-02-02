const redux = require('redux')
const createStore = redux.createStore()
const COSUME_ITEM='CONSUME_ITEM';
const PRODUCE_ITEM='PRODUCE_ITEM';
const initial_state={
    item:10
}
function consumeItem(){
    return{
        type:COSUME_ITEM,
        info:'consume item'
    }
}
function produceItem(){
    return{
        type:PRODUCE_ITEM,
        info:'consume item'
    }
}
const reducer=(state=initial_state,action)=>{
switch(action.type)
{
case COSUME_ITEM:
    return {
        ...state,
        item:item-1
    }

    case PRODUCE_ITEM:
        return{
            ...state,
            item:item+1
        }
}
}
const store=createStore(reducer)
console.log('initial state',sto)
