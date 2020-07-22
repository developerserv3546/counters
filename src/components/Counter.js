import React, {useState} from "react";
import CounterButton from "./CounterButton";

export default function Counter() {

    const [counter, setCounter] = useState(10);
    const onCounterChange = (v) => setCounter(counter + v);
    const getButtons = (sign = 1) => {
        return [1, 2, 3].map(num => <CounterButton key={num} onCounterChange={onCounterChange} value={num * sign}/>)
    }

    return (
        <div>
            {getButtons(-1)}
            <span>{counter}</span>
            {getButtons()}
        </div>
    );
}