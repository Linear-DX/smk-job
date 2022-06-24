import Navbar from "../components/navbar";
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
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Beasiswa = () => {
    const [keyword, setKeyword] = useState('')

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleClick = (e) => {
        console.log(keyword)
        setKeyword("")
    }

    const { title, description } = useSelector((state: RootState) => state.job);

    return (
        <div>
            <Navbar />
            <Stack
                spacing={4}
                backgroundColor={'darkBlue.400'}
                height={'500px'}
            >
                <Center>
                    <InputGroup
                        mt={8}
                        width={'450px'}>
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
                    <p>Title: {title}</p>
                    <br />
                    <p>Desc: {description}</p>
                </Center>
            </Stack>
        </div>
    )
}

export default Beasiswa;