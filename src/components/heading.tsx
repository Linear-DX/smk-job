import {
    Center,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Text,
    Flex,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { useState } from "react";

export default function Search() {
    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleClick = (e) => {
        console.log(keyword)
        setKeyword("")
    }

    return (
        <Stack
            spacing={4}
            backgroundColor={'darkBlue.400'}
            height={'250px'}
        >

            <Flex
                align={'center'}
                flexDirection={'column'}
                fontWeight={600}
                color={'white'}
                mt={10}
                mb={4}>
                <Text fontSize={'4xl'} letterSpacing={'5px'}>
                    SMKJOB Website
                </Text>

                <Text fontSize={'lg'}>
                    Temukan pekerjaan Anda hari ini!
                </Text>
            </Flex>

            <Center>
                <InputGroup
                    mt={0}
                    width={['250px', '450px']}>
                    <InputLeftElement
                        pointerEvents='none'
                        justifyItems={'center'}
                        children={<ImSearch />}
                        color={'black'}
                    />

                    <Input type='tel'
                        placeholder='Cari Lowongan'
                        variant='SolidBlue'
                        value={keyword}
                        onChange={handleChange}
                    />

                    <Button variant="SolidBlue" ml={6} onClick={handleClick}>Cari</Button>
                </InputGroup>
            </Center>
        </Stack>
    );
}