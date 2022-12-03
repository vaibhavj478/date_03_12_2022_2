import React from 'react'

import { useSelector , useDispatch } from 'react-redux';

import {
  Container,
  Box,
  Center,
  Stack,
  Button,
  Heading,
  Input
} from "@chakra-ui/react";
import { useState } from "react";
import { loginFun } from '../api/tokenReducer';
import Message from '../components/Message';

const Login = () => {

  const {token} = useSelector((state)=> state)

 

  const dispatch = useDispatch();

  const initState = {
    name: "",
    mobile: "",
  };

  const [data, setData] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    dispatch(loginFun(data))

    setData(initState);

    


  };



  return (
  
    <Container>
    <Center>
      <Box>

          <Box> {token.token.length? <Message message={'logged in'} /> :null}</Box>

        <Stack spacing={'2'} >
          <Heading>Login</Heading>

          <form onSubmit={(e) => handleSubmit(e)}>

          <Stack spacing={'1'} >
          <Input  width='auto'   value={data.name} onChange={(e)=>setData( { ...data, "name": e.target.value})}   placeholder='Name'  />
          {/* <Input htmlSize={5} width='auto'  placeholder=''  /> */}
          <Input width='auto' value={data.mobile} onChange={(e)=>setData({ ...data, "mobile": e.target.value})}  placeholder='Mobile'  />

          <Button type="submit" > Submit</Button>
          </Stack>

          </form>
        </Stack>
      </Box>
    </Center>
  </Container>

  )
}

export default Login