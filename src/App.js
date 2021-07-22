import './App.scss';
import {useSelector, useDispatch } from "react-redux";
import { counting, countingAsync, reverseCounting } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeCounting);
  const dispatch = useDispatch();
  return (
    <div className="container">
        <h1>Countings & Backword Countings</h1>
        <h4>Using React & Redux</h4>
        <div className="countings_container">
          <a className="revcountings" title="Backword Counting"  onClick={ () => dispatch(reverseCounting()) }><span>Backword counting -</span></a>
          <input name="countings_input" type="text" className="countings_input" value={myState}></input>
          <a className="countings" title="countings" onClick={ () => dispatch(counting()) }><span>Counting +</span></a>
          <a className="countings" title="countings" onClick={ () => countingAsync() }><span>Counting Async Saga</span></a>
        </div>
  </div>
  );
}

export default App;
