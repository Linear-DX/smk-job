import React from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Image,
    Center,
    Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
// import "./style.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", right: "5px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green", left: "5px" }}
      onClick={onClick(console.log('tes'))}
    />
  );
}

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    
    // prevArrow: <SlickArrowLeft currentSlide={undefined} slideCount={undefined} />,
    // nextArrow: <SlickArrowRight currentSlide={undefined} slideCount={undefined} />,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };



export default function Content() {
    // const [slider, setSlider] = React.useState<Slider | null>(null);

    // // These are the breakpoints which changes the position of the
    // // buttons as the screen size changes
    // const top = useBreakpointValue({ base: '90%', md: '50%' });
    // const side = useBreakpointValue({ base: '30%', md: '40px' });

    // // This list contains all the data for carousels
    // // This can be static or loaded from a server
    // const cards = [
    //     {
    //         title: 'Design Projects 1',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    //     },
    //     {
    //         title: 'Design Projects 2',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    //     },
    //     {
    //         title: 'Design Projects 3',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    //     },
    //     {
    //         title: 'Design Projects 4',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    //     },
    //     {
    //         title: 'Design Projects 5',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    //     },
    //     {
    //         title: 'Design Projects 6',
    //         text:
    //             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
    //         image:
    //             'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    //     },
    // ];

    // return (
    //     <Box
    //         position={'relative'}
    //         height={'600px'}
    //         width={'full'}
    //         overflow={'hidden'}
    //         mt={10}
    //         mb={5}>
    //         {/* CSS files for react-slick */}
    //         <link
    //             rel="stylesheet"
    //             type="text/css"
    //             charSet="UTF-8"
    //             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    //         />
    //         <link
    //             rel="stylesheet"
    //             type="text/css"
    //             href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    //         />
    //         {/* Left Icon */}
    //         <IconButton
    //             aria-label="left-arrow"
    //             variant="ghost"
    //             position="absolute"
    //             left={side}
    //             top={top}
    //             transform={'translate(0%, -50%)'}
    //             zIndex={2}
    //             onClick={() => slider?.slickPrev()}>
    //             <BiLeftArrowAlt size="40px" />
    //         </IconButton>
    //         {/* Right Icon */}
    //         <IconButton
    //             aria-label="right-arrow"
    //             variant="ghost"
    //             position="absolute"
    //             right={side}
    //             top={top}
    //             transform={'translate(0%, -50%)'}
    //             zIndex={2}
    //             onClick={() => slider?.slickNext()}>
    //             <BiRightArrowAlt size="40px" />
    //         </IconButton>
    //         {/* Slider */}
    //         <Slider {...settings} ref={(slider) => setSlider(slider)}>
    //             {cards.map((card, index) => (
    //                 <Center py={6}>
    //                     <Box
    //                         key={index}
    //                         maxW={'445px'}
    //                         w={'full'}
    //                         bg={'gray.900'}
    //                         boxShadow={'2xl'}
    //                         rounded={'md'}
    //                         p={6}
    //                         overflow={'hidden'}
    //                         margin={'auto'}
    //                     >
    //                         <Box
    //                             h={'210px'}
    //                             bg={'gray.100'}
    //                             mt={-6}
    //                             mx={-6}
    //                             mb={6}
    //                             pos={'relative'}>
    //                             <Image src={(card.image)} height={'full'} w={'full'} />
    //                         </Box>

    //                         <Stack>
    //                             <Text
    //                                 color={'green.500'}
    //                                 textTransform={'uppercase'}
    //                                 fontWeight={800}
    //                                 fontSize={'sm'}
    //                                 letterSpacing={1.1}>
    //                                 Artikel
    //                             </Text>
    //                             <Heading
    //                                 color={'white'}
    //                                 fontSize={'2xl'}
    //                                 fontFamily={'body'}>
    //                                 {card.title}
    //                             </Heading>
    //                             <Text color={'gray.500'}>
    //                                 {card.text}
    //                             </Text>
    //                         </Stack>


    //                         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
    //                             <Button
    //                                 as="a"
    //                                 href={'/lowongan-kerja'}>
    //                                 Learn More
    //                             </Button>
    //                         </Stack>

    //                     </Box>
    //                 </Center>
    //             ))}
    //         </Slider>
    //     </Box>
    // )

    return(
        <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {[1,2,3,4,5].map((item, index) => {
            return (
                <div key={index}>
                    <h1 style={{
                        color: "tomato",
                        fontSize: 100,
                        textAlign: "center",
                    }}>
                        {item}
                    </h1>
                </div>
            ) 
          })}
        </Slider>
      </div>
      )
}
