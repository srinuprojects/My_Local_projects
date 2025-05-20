import React,{useState,useEffect} from "react";

export default function MyComponent(){
    const [count,setCount]=useState(0);

    function AddCount(){
        console.log('UUUUUUUU')
        setCount(c=>c+1)
    }

    return (<>
    <p>Count :{count}</p>
    <button onClick={AddCount}>ADD</button>
    </>)
}
