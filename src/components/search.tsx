import {
    Center,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Search() {

    const [search, setSearch] = useState([]);
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response.data);
        } catch(e: any) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <Stack
            spacing={4}
            backgroundColor={'darkBlue.400'}
            height={'500px'}
        >
            <Center>
                <InputGroup
                    mt={8}
                    width={['250px','450px']}>
                    <InputLeftElement
                        pointerEvents='none'
                        justifyItems={'center'}
                        children={<ImSearch />}
                        color={'black'}
                    />

                    <Input type='tel'
                        placeholder='Cari Lowongan'
                        variant='SolidBlue'
                        value={search}
                        onChange={handleChange}
                    />
                    
                    <Button variant="SolidBlue" ml={6}>Cari</Button>
                </InputGroup>
            </Center>
        </Stack>
    );
}