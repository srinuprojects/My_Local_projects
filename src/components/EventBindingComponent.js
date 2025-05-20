import { useState,useEffect } from "react";

export default function EventBindingComponet()
{
    const [userName,setUserName]=useState('john');
    function handleUserName(e)
    {
        setUserName(e.target.value);
        console.log(e.target.value)
    }
  return(
    <div className="container-fluid">
        <dl>
            <dt>User name</dt>
            <dd><input type="text" onChange={handleUserName} /></dd>
        </dl>
        <h3>Hello ! {userName}</h3>

    </div>

  )
}