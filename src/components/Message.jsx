

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Message = ({message}) => {

    const [msg , setMsg] = useState(message)

    const loadFun =(e)=>{

        setTimeout(()=>{
            setMsg("");
        },1000)

    }
    useEffect(()=>{

        return ()=>{
            console.log(`end hook`);
        }
    },[]);


  return (
    <div onChange={(e) =>loadFun(e)} > {msg}</div>
  )
}

export default Message