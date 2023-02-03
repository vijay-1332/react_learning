const {PRODUCE_ITEM,CONSUME_ITEM,SHELL_BOOKS,BYU_BOOKS} = require('./actionType')
/**actions createor */
function produceItems() {
    return {
        type: PRODUCE_ITEM
    }
}
function consumeItems() {
    return {
        type: CONSUME_ITEM
    }
}
function shellBooks(){
return{
    type:SHELL_BOOKS
}
}
function buyBooks(){
return {
    type:BYU_BOOKS
}
}
/**action creator end */
module.exports={produceItems,consumeItems,shellBooks,buyBooks}