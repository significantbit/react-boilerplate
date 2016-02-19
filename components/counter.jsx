import React from "React";
import { connect } from "react-redux";
import {increase, decrease} from "../actions";

let counter = ({counter, dispatch}) => (
  <div>
    <h1>Counter <span>{counter}</span></h1>
    <span onClick= { () =>
      dispatch(increase())
    }
    > + </span>
    <span onClick= { () =>
      dispatch(decrease())
    }
    >-</span>
  </div>
);

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(counter);