import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Decrement, Increment } from '../redux/Reducer/counterReducer/counterReducer';

export default function Counter() {
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <h3>{counter}</h3>
            <div>
                <button onClick={() => dispatch(Increment())}>+</button>
                <button onClick={() => dispatch(Decrement())}>-</button>
            </div>
        </div>
    )
}
