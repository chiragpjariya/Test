import { useState } from "react"


function Counter() {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <div className="h-[80%] w-[500px] bg-blue-400 flex flex-col items-center justify-center">

                <h1 className="text-4xl text-center">Counter</h1>

                <div className="flex mt-24  w-full justify-evenly items-center ">
                    <button className="bg-green-400 p-2 m-2 w-[100px]" onClick={() => setCounter(counter + 1)}>Increment</button>
                    <button className=" bg-purple-600 p-2 m-2 w-[100px]" onClick={() => setCounter(0)}>reset</button>
                    <button className="bg-red-400 p-2 m-2 w-[100px]" onClick={() => setCounter(counter - 1)}>Decrement</button>
                </div>
                <h2 className="text-2xl text-center mb-28">Counter: {counter}</h2>
            </div>
        </>
    )
}

export default Counter