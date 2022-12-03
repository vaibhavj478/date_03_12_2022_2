import React from "react";

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
import { signUpFun } from "../api/tokenReducer";
import Message from "../components/Message";

const SignUp = () => {
  const {token} = useSelector((state) => state);
  console.log(token);

  const dispatch = useDispatch();

  const initState = {
    name: "",
    address: "",
    mobile: "",
    profile: "",
  };

  const [data, setData] = useState(initState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    dispatch(signUpFun(data));

    setData(initState);
  };

  return (
    <Container>
      <Center>
        {
          token.status === "error"? <Message message={"Error"} /> :null
        }
        {
          token.status === "loading"? <Message message={"Loading.."} /> :null
        }
        {
          token.status === "loading"? <Message message={"Success"} /> :null
        }
        <Box>
          <Stack spacing={"2"}>
            <Heading>Register</Heading>

            <form onSubmit={(e) => handleSubmit(e)}>
              <Stack spacing={"1"}>
                <Input
                  width="auto"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Name"
                />
                {/* <Input htmlSize={5} width='auto'  placeholder=''  /> */}
                <Input
                  width="auto"
                  value={data.mobile}
                  onChange={(e) => setData({ ...data, mobile: e.target.value })}
                  placeholder="Mobile"
                />
                <Input
                  width="auto"
                  value={data.address}
                  onChange={(e) =>
                    setData({ ...data, address: e.target.value })
                  }
                  placeholder="Address"
                />

                <Button type="submit"> Submit</Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export default SignUp;
