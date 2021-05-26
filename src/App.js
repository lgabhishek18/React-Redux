import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import { incNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div>
          <button onClick={ () => dispatch(incNumber())}>Click Me</button>
        </div>
        <div>
          <input name="count__value" type="text" className="input__count" value={myState} />
        </div>
      </div>
    </div>
  );
}
export default App;
