import React from "react";

export default function CounterButton({onCounterChange, value: v}) {

    return (
        <button onClick={() => onCounterChange(v)} className="btn btn-outline-info">{v > 0 ? `+${v}` : v}</button>
    );
}