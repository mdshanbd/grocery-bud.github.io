import React from 'react';
import { IncNum, DecNum } from '../actions/index'

import { useSelector, useDispatch } from 'react-redux';



const IncDecNum = () => {
    const myState = useSelector((state) => state.changeNumber)
    const disp = useDispatch()

    return (
        <>
            <center>
                <button onClick={() => disp(IncNum())}>Increment</button><br /><br />
                <input type="text" name="quantity" value={myState} /><br /><br />
                <button onClick={() => disp(DecNum())}>Decrement</button>
            </center>
        </>
    );
}

export default IncDecNum;
