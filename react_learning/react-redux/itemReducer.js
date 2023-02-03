const {PRODUCE_ITEM,CONSUME_ITEM} = require('./actionType')
/**state declaration */
const initialItemState = {
    item: 1
}

/**reducer function  */
const itemReducer=(state = initialItemState, action)=>{
    switch (action.type) {
        case PRODUCE_ITEM: return {
            ...state,
            item: state.item + 1
        }
        case CONSUME_ITEM: return {
            ...state,
            item: state.item - 1
        }
        default:
            return state 
    }
}
/**reducer function end */
module.exports={itemReducer}