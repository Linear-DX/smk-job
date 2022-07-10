import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useBreakpointValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={'gray.900'}
            color={'gray.200'}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
                    <Stack align={'center'}>
                        <ListHeader>
                            <Text fontWeight={'700'}> SMKJOB</Text>
                        </ListHeader>
                        <Link href={'lowongan-kerja'}>Lowongan Kerja</Link>
                        <Link href={'perusahaan'}>Perusahaan</Link>
                        <Link href={'tips-karir'}>Tips Karir</Link>
                        <Link href={'beasiswa'}>Beasiswa</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <ListHeader>Perusahaan</ListHeader>
                        <Link href={'#'}>About Us</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact Us</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack align={'center'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={8}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: 'gray.700',
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: 'gray.700',
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={'white'}
                        fontWeight={'bold'}
                        fontSize={24}>
                        <a href="/">SMKJOB</a>
                    </Text>
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 FE_EM8. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}