import React, {useState} from 'react';
import Counter from "./Counter";

export default function App() {

    const [counters, setCounters] = useState(3);
    const getCounters = () => Array.apply(0, Array(counters)).map((e, i) => <Counter key={i}/>);
    const addCounter = () => setCounters(counters + 1);

    return (
        <div>
            <h2>Counters</h2>
            {getCounters()}
            <button className="btn btn-success" onClick={addCounter}>Add Counter</button>
        </div>
    );
}
