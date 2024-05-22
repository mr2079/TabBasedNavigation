import { useState } from "react"

export default function Page1() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Page 1</h1>
            <h6>Count = {count}</h6>
            <button className="btn btn-sm btn-primary"
            onClick={() => setCount(prev => prev + 1)}>
                Count
            </button>
        </>
    )
}