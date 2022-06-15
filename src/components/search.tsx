import {
    Center,
    Stack,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";


export default function Search() {

    return (
        <Stack
            spacing={4}
            backgroundColor={'green.50'}
            height={'500px'}
        >
            <Center>
            <InputGroup
                mt={8}
                width={'500px'}>
                <InputLeftElement
                    pointerEvents='none'
                    justifyItems={'center'}
                    children={<ImSearch />}
                    color={'black'}
                    
                />

                <Input type='tel' 
                placeholder='Search' 
                borderColor={'black'}
                variant="theme"
                />
                <Button>Search</Button>
            </InputGroup>
            </Center>
        </Stack>
    );
}