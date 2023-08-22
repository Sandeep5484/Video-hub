import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            w={['full', '96']}
            spacing={'8'}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
            <Input
              placeholder={'Email/Username'}
              type={'email'}
              required
              focusBorderColor="purple.500"
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor="purple.500"
            />
            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to="forgotpassword">Forgot Password?</Link>
            </Button>
            <Button type={'submit'} colorScheme={'purple'}>
              Log In
            </Button>
            <Text textAlign={'end'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to="signup">Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default Login;
