import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
            <Heading textAlign={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'20'} />
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor="purple.500"
            />
            <Input
              placeholder={'Email'}
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
            <Button type={'submit'} colorScheme={'purple'}>
              Sign Up
            </Button>
            <Text textAlign={'end'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to="/login">Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    </>
  );
};

export default Signup;
