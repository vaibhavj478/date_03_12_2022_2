import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Box,
  Center,
  Stack,
  Button,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { setProfileLocal , setProfileApi } from "../api/profile";

const UpdateProfile = () => {
  const { token, profile } = useSelector((state) => state);


  const dispatch = useDispatch();

  const [data, setData] = useState(profile.user);

  const handleChange =(e)=>{

    // console.log(e.target);
    setData({...data,[e.target.name]:e.target.value});
    // console.log(data);

    dispatch(setProfileLocal(data));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setProfileLocal(data));

    dispatch(setProfileApi(token.token,data));

   
  };

  return (
    <Container>
      <Center>
        <Stack>
        <Heading>Edit-Profile</Heading>

        <Box>
        <form onSubmit={(e) => handleSubmit(e)}>
              <Stack spacing={"1"}>
                <Input
                  width="auto"
                  value={data.name}
                  name="name"
              onChange={(e)=>handleChange(e)}
                  placeholder="Name"
                />
                {/* <Input htmlSize={5} width='auto'  placeholder=''  /> */}
                <Input
                  width="auto"
                  value={data.mobile}
                  onChange={(e)=>handleChange(e)}
                  name="mobile"
                  placeholder="Mobile"
                />
                <Input
                  width="auto"
                  onChange={(e)=>handleChange(e)}
                  value={data.address}
                  name="address"
                  placeholder="Address"
                />

                <Button type="submit"> Submit</Button>
              </Stack>
            </form>
        </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default UpdateProfile;
