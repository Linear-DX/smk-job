import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import infoBeasiswa from '../assets/pictures/carousel/young-female5760.jpg';
import tipsKarir from '../assets/pictures/carousel/smiley-woman.jpg';
import lowonganKerja from '../assets/pictures/carousel/group.jpg';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Lowongan Kerja',
      text:
        "Beragam pilihan lowongan pekerjaan tersedia untuk kamu, dapatkan kesempatan karir sesuai dengan jurusan kamu.",
      image:
        // 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
        lowonganKerja
    },
    {
      title: 'Tips Karir',
      text:
        "Tips karir memiliki banyak manfaat untuk kamu yang baru saja lulus sekolah nih. Kamu dapat memperbanyak pengetahuan tentang karir yang ingin kamu tekuni.",
      image:
        tipsKarir
      // 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    },
    {
      title: 'Info Beasiswa',
      text:
        "Kamu dapat melihat berbagai informasi mengenai beasiswa untuk berbagai jenjang pendidikan. Ada sangat banyak beasiswa untuk kamu pilih sesuai dengan bidang yang kamu sukai.",
      image:
        infoBeasiswa
      // 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={['400px','564.5px']}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        color={['black','white']}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        color={['black','white']}
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            className='carousel-image'
            height={['26em','48em']}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={['none',`url(${card.image})`]}>

            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height={['420px','500px']} position="relative">
              <Stack
                className='carousel-text'
                order={'1'}
                spacing={4}
                maxW={['18em','26em']}
                position='relative'
                top="50%"
                left={['9%','-55.53%']}
                transform={["translateY(-60%)","translateY(-40%)"]}
                border={'2px'}
                borderRadius={'8'}
                borderColor={'black'}
                p={4}>
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'black'}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'black'}>
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}