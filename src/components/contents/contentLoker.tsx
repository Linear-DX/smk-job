import {
    Stack,
    Heading,
    Center,
    Box,
    Text,
    Image,
    Button,
    Flex,
} from "@chakra-ui/react";
import { useAppSelector } from "../../app/store";
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from "./contentTipsKarir";
import { IoLocation } from "react-icons/io5";

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

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

export default function ContentLoker() {
    const { jobs } = useAppSelector((state) => state.job);

    return (
        <div>
            <Heading fontSize={'3xl'} mt={4} ml={12} color={'white'}> Lowongan Kerja </Heading>
            <Slider {...settings}>
                {
                    jobs?.map((job, index) => {
                        return (
                            <div key={index}>
                                <Center py={6}>
                                    <Box
                                        key={index}
                                        maxW={'350px'}
                                        maxH={'520px'}
                                        w={'full'}
                                        bg={'gray.900'}
                                        boxShadow={'2xl'}
                                        rounded={'md'}
                                        p={6}
                                        overflow={'hidden'}
                                        margin={'auto'}
                                        bgColor={'gray.800'}
                                    >
                                        <Box
                                            h={'210px'}
                                            bg={'gray.100'}
                                            mt={-6}
                                            mx={-6}
                                            mb={6}
                                            pos={'relative'}>
                                                <Center>
                                            <Image src={job.image} height={'full'} w={'200px'} margin={'auto'} mt={'1.5'} />
                                            </Center>
                                        </Box>

                                        <Stack>
                                            <Heading
                                                color={'white'}
                                                my={5}
                                                fontSize={'xl'}
                                                fontFamily={'body'}
                                                textAlign={'center'}>
                                                {job.label}
                                            </Heading>

                                            <Text
                                                color={'yellow.400'}
                                                textTransform={'uppercase'}
                                                fontWeight={800}
                                                fontSize={'sm'}
                                                letterSpacing={1.1}>
                                                {job.title}
                                            </Text>

                                            <Text color={'gray.200'}>
                                                {job.desc}
                                            </Text>

                                            <Flex>
                                                <IoLocation style={{
                                                    color: 'white',
                                                    marginRight: '5px',
                                                    marginLeft: '-3px'
                                                }} />
                                                <Text color={'white'} mt={-1}>{job.loc}</Text>
                                            </Flex>

                                        </Stack>

                                        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                                            <Button
                                                as="a"
                                                href={'/lowongan-kerja'}
                                                colorScheme={'blue'}
                                                textTransform={'uppercase'}>
                                                Lihat
                                            </Button>

                                            <Button
                                                as="a"
                                                href={'/lowongan-kerja'}
                                                colorScheme={'yellow'}
                                                textTransform={'uppercase'}>
                                                Lamar
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Center>
                            </div>
                        )
                    })}
            </Slider>
        </div >
    )
}