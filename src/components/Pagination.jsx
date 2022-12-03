import React from 'react'

import { Container, Box, Center, Stack, Button, Input , HStack } from "@chakra-ui/react";

const Pagination = ({page , setPage}) => {

    if(page === 0){
        return 
    }

    let arr = [];

    for(let i = 0;i< page;i++ ){

        arr[i] = i+1
    }


  return (

    <Container>

        <Center>
            <HStack>
                {

                arr.map((el , ind)=> <Button  key={ind}  onClick={()=>setPage(el-1) } >{el}</Button>)
                }

            </HStack>

        </Center>
    </Container>
    
  )
}

export default Pagination