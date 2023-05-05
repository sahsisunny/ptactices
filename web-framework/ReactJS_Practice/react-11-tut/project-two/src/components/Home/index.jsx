import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from '../../assets/images/1.jpg';
import Image2 from '../../assets/images/2.jpg';
import Image3 from '../../assets/images/3.jpg';
import Image4 from '../../assets/images/4.jpg';
import Image5 from '../../assets/images/5.jpg';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '3rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: 'white',
  bgColor: 'blackAlpha.600',
};

function Home() {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
}

export default Home;

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showThumbs={false}
      showStatus={false}
      showIndicators
      showArrows={false}
    >
      <Box w="full" h="80vh">
        <Image src={Image1} alt="Image1" />
        <Heading {...headingOptions}>Two Butterflies on a Flower</Heading>
      </Box>
      <Box>
        <Image src={Image2} alt="Image2" />
        <Heading {...headingOptions}>Two Butterflies on a Flower</Heading>
      </Box>
      <Box>
        <Image src={Image3} alt="Image3" />
        <Heading {...headingOptions}>Two Butterflies on a Flower</Heading>
      </Box>
      <Box>
        <Image src={Image4} alt="Image4" />
        <Heading {...headingOptions}>Two Butterflies on a Flower</Heading>
      </Box>
      <Box>
        <Image src={Image5} alt="Image5" />
        <Heading {...headingOptions}>Two Butterflies on a Flower</Heading>
      </Box>
    </Carousel>
  );
};
