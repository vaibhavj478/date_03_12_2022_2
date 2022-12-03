import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Box,
  Center,
  Stack,
  Button,
  Input,
  HStack,
  Heading,
} from "@chakra-ui/react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import {
  getCategoryApi,
  createCategoryApi,
  deleteCategoryApi,
  updateCategoryApi,
} from "../api/category";
import { useState } from "react";
import { IsAuth } from "../components/IsAuth";
import Pagination from "../components/Pagination";

const Category = () => {
  const { token, category } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [updateCateName, setUpdateCateName] = useState("");
  const [eidtId, setEidtId] = useState(-1);
  const [cateName, setCateName] = useState("");

  const [add, setAdd] = useState("");

  const setPageFun = (num) => {
    setPage(num);

    console.log(page);

    dispatch(getCategoryApi(token.token, page, cateName));
  };

  const handleUpdate = (id) => {
    console.log(id);

    dispatch(updateCategoryApi(token.token, id, updateCateName));

    dispatch(getCategoryApi(token.token, page, cateName));

    setEidtId(-1);
  };

  const handleDelete = (id) => {
    console.log(id);

    dispatch(deleteCategoryApi(token.token, id));

    dispatch(getCategoryApi(token.token, page, cateName));
  };

  const handleCreate = () => {
    dispatch(createCategoryApi(token.token, add));

    dispatch(getCategoryApi(token.token, page, cateName));
    setAdd("");
  };

  const handleSearch = () => {
    dispatch(getCategoryApi(token.token, page, cateName));
  };

  useEffect(() => {
    dispatch(getCategoryApi(token.token, page, cateName));

    // console.log(category);
  }, []);

  return (
    <Container>
      <IsAuth />
      <Center>
        <Box>
          {category.status === "loading" ? <Heading>loading...</Heading> : null}
        </Box>
        <Stack spacing={"2"}>
          <Box>
            <HStack spacing={3}>
              <Box>
                <Input
                  width="auto"
                  value={cateName}
                  onChange={(e) => setCateName(e.target.value)}
                  placeholder=" Search by Category"
                />

                <Button onClick={() => handleSearch()}>Find</Button>
              </Box>

              <Box>
                <Input
                  width="auto"
                  value={add}
                  onChange={(e) => setAdd(e.target.value)}
                  placeholder="Add Category"
                />

                <Button onClick={() => handleCreate()}>Add</Button>
              </Box>
            </HStack>
          </Box>
          <Box>
            <TableContainer>
              <Table variant="striped" colorScheme="red">
                <TableCaption>Category Details</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Category</Th>
                    <Th>Id</Th>
                    <Th>Delete</Th>
                    <Th>Edit</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {category.category.map((el, ind) => {
                    return (
                      <Tr key={ind + 1}>
                        {eidtId === ind ? (
                          <>
                            <Td>
                              {" "}
                              <Input
                                width="auto"
                                border={'2px'}
                                bgColor={"red.400"}
                                value={updateCateName}
                                onChange={(e) =>
                                  setUpdateCateName(e.target.value)
                                }
                                placeholder="Add Category"
                              />{" "}
                            </Td>
                          </>
                        ) : (
                          <>
                            <Td>{el.pro_cate_name}</Td>
                          </>
                        )}
                        <Td> {el._id}</Td>

                        <Td>
                          {" "}
                          <Button
                            color={`red.400`}
                            onClick={() => handleDelete(el._id)}
                          >
                            Delete
                          </Button>{" "}
                        </Td>

                        <Td>
                          {eidtId === ind ? (
                            <Button
                              color={`green.400`}
                              onClick={() => handleUpdate(el._id)}
                            >
                              save
                            </Button>
                          ) : (
                            <>
                              <Button
                                color={`green.400`}
                                onClick={() => setEidtId(ind)}
                              >
                                Edit
                              </Button>
                            </>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <Box>
            <Pagination page={category.total_page} setPage={setPageFun} />
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Category;
