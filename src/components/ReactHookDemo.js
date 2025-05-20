import { useState,useEffect } from "react"

export default function ReactHookDemo(){
    const [msg,setMsg]=useState();
    function handleSuccesClick(){
        setMsg(<SuccessComponent/>)
    }
    function handleErrorClick(){
        setMsg(<ErrorComponent/>)
    }
    return(
        <div className='container-fluid'>
            <h1>React Hooks</h1>
            <button onClick={handleSuccesClick}>Success</button>
            <button onClick={handleErrorClick}>invalid</button>
            <hr />
            <div>
                {msg}
            </div>

        </div>
    )
}


function SuccessComponent() {
    useEffect(() => {
        alert('SUCCESS COMPONENT WILL MOUNT');
        return () => {
            alert('SUCCESS COMPONENT WILL UNMOUNT');
        };
    }, []);

    return (
        <div>
            <h2>Login Success...</h2>
        </div>
    );
}

function ErrorComponent() {
    useEffect(() => {
        alert('Error COMPONENT WILL MOUNT');
        return () => {
            alert('Error COMPONENT WILL UNMOUNT');
        };
    }, []);

    return (
        <div>
            <h2>invalid credients...</h2>
        </div>
    );
}

