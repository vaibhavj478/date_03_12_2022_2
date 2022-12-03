import React ,{useEffect} from 'react'

import {useNavigate } from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'

export const IsAuth = () => {

    const {token} = useSelector((state) => state);

    const navi =  useNavigate()



    useEffect(() => {
      
        if( !token.token.length){
            navi('/login');
        }
    
      return () => {
        console.log("nothing")
      }
    }, [])
    

  return (
    <div>IsAuth</div>
  )
}
