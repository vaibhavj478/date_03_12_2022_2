import { Link } from "react-router-dom";

import { Container, Box, Center, HStack  , Button } from "@chakra-ui/react";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div className="App">
      <Container  marginY={'2'} p="2.5" >
        <Center>
          <Box>
            <HStack>
            <Button> <Link to="/signup">Sign-Up </Link> </Button>    
            <Button>  <Link to="/login">Login</Link></Button>    
            <Button>  <Link to="/products">Products</Link> </Button>   
            <Button>  <Link to="/myProfile">Profile</Link> </Button>   
            <Button>  <Link to="/category">Category</Link> </Button>   
            </HStack>

            <AllRoutes/>

          </Box>
        </Center>
      </Container>
    </div>
  );
}

export default App;
