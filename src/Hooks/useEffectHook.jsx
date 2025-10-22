import React, { useEffect, useState } from 'react'

const UseEffectHook = () =>{
  const [online,setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatus = () => setOnline(navigator.onLine);

    window.addEventListener("online",handleStatus);
    window.addEventListener("offline",handleStatus);

    return () =>{
      window.removeEventListener("online",handleStatus);
      window.removeEventListener("offline",handleStatus);
    }
  },[])

  return <h3>{online ? "🟢online" : "🔴offline"}</h3>
}
export default UseEffectHook;