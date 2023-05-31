import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "./actions"

const Counter = ({counter, inc, dec, rnd})=>{
    return(
        <>
            <h1 className="display-4">{counter}</h1>
            <button
                className="btn btn-primary btn-lg"
                onClick={dec}>
                Decrement
            </button>
            <button
                className="btn btn-primary btn-lg"
                onClick={inc}>
                Increment
            </button>
            <button
                className="btn btn-primary btn-lg"
                onClick={rnd}>
                Random
            </button>
        </>)
}

const mapStateToProps = (state)=>{
    return{
        counter: state
    }
}

const mapDispatchProps = (dispatch)=>{
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch)
    return{
        inc, dec,
        rnd:()=>{
            const value = Math.floor(Math.random()*10+1)
            rnd(value)
        }
    }

}

export default connect(mapStateToProps, mapDispatchProps)(Counter);