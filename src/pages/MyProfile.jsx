import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Box,
  Center,
  Stack,
  Heading,
  Wrap,
  WrapItem,
  Avatar,
  Text,
  Badge,
} from "@chakra-ui/react";
import { IsAuth } from "../components/IsAuth";

import { getProfileThunk } from "../api/profile";
import UpdateProfile from "../components/UpdateProfile";

const MyProfile = () => {
  const { token, profile } = useSelector((state) => state);

  const user = profile.user;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileThunk(token.token));

    return () => {};
  }, []);

  return (
    <Container>
      <IsAuth />
      <Center>
        <Box>
          <Stack>
            <Heading>My Profile</Heading>

            <Wrap>
              <WrapItem>
                <Avatar name={user.name} src={user.images} />
              </WrapItem>
            </Wrap>

            <Text fontWeight="bold">
              Name- {user.name},{" "}
              <Badge colorScheme="green">{user.authorization}</Badge>
            </Text>
            <Text>Mobile- {user.mobile}</Text>
            <Text fontWeight="100"> {user.address}</Text>

            <UpdateProfile />
          </Stack>
        </Box>
      </Center>
    </Container>
  );
};

export default MyProfile;
