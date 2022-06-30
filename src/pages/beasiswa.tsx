import Navbar from "../components/navbar";
import {
    Stack,
} from "@chakra-ui/react";
import { useAppSelector } from "../app/store";

const Beasiswa = () => {

    const { jobs } = useAppSelector((state) => state.job);

    return (
        <div>
            <Navbar />
            <Stack
                spacing={4}
                backgroundColor={'darkBlue.400'}
                height={'500px'}
            >
                {
                    jobs?.map((job) => <p>{job.job}</p>
                )}
            </Stack>
        </div>
    )
}

export default Beasiswa;