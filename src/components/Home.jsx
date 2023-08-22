import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img6}
              alt="img1"
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              veniam dolorum tempore, dolorem alias sed id cupiditate dicta
              natus fugiat quisquam a, vitae iste quia. Impedit, hic.
              Accusantium soluta aliquam porro iusto eligendi beatae, nisi
              voluptatum animi doloremque sunt nam minus eaque iste ratione
              facere aliquid esse aut, saepe numquam tenetur ducimus quidem.
              Dolores ducimus quos debitis. Fugiat architecto nulla error
              eveniet voluptatibus nostrum consequuntur numquam sed ipsa
              deleniti. Nisi molestiae qui beatae magni blanditiis magnam
              expedita reprehenderit fuga, nostrum, et cupiditate porro dolore
              repellat ab vel tenetur debitis asperiores nihil doloremque! Ut
              impedit consectetur consequatur!
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThgumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} alt="img1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} alt="img1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Gaming is the Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} alt="img1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Create content on YouTube
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} alt="img1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Earn more Subscribers
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img5} alt="img1" />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Become a Pro Gamer
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
