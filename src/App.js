
import { Box, Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import './App.css';
import Message from './component/Message';




function App() {
  return (
    <>
      <Box bg={'red.50'}>
        <Container h={'100vh'} bg={'white'}>
          <VStack h={'full'} bg={'white'}>
            <Button colorScheme={'red'} w={'full'}>
              LOGOUT
            </Button>
            <VStack h={'90%'} w={'full'} bg={'white'} overflowY={'auto'}>
              <Message text={'I Am A Message Component'} />
              <Message user={'me'} text={'I Am A Message Component'} />
            
            </VStack>
            <form style={{ width: '100%', }}>
              <HStack bg={'white'}>
                <Input placeholder='Enter A Message' />
                <Button type='submit' colorScheme={'purple'}>SEND</Button>
              </HStack>
            </form>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

export default App;
