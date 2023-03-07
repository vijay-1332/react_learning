//import {useEffect} from 'react'
import { connect } from 'react-redux'
import { updateCounter } from './redux/action'
import React from 'react'
function ReduxThunk(props) {

    return (
        <div className="p-4 space-y-3">
            <p>count: { props.counter}</p>
            <button className="bg-blue-400 p-2 rounded-lg" onClick={props.getCounter()}>Get next record</button>
            <div>
                {/* <pre>{JSON.stringify(skywalkers, null, 5)}</pre> */}
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        counter: state.cnt.counter,
        // skywalker:state.skywalker.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCounter: () => dispatch(updateCounter()),
      //  fetchUser:()=>dispatch(fetchUserData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk)