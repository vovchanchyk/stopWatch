
import { connect } from "react-redux";
import Stopwatch from "./Stopwatch";



const mapDispatchToProps=(dispatch)=>{
    return  {
        dispatch : dispatch
    }
}
const mapStateToProps =(state)=>{
    return state
}

export const StopwatchContainer = connect(mapStateToProps,mapDispatchToProps)(Stopwatch)

