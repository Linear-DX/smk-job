import { Box, Heading, VStack, Text, HStack } from '@chakra-ui/layout'
import { Checkbox, FormControl, FormLabel, Input, Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom';


const Login = () => {
    return (
        <Box 
        w={['full', 'md']}
        p={[8,10]}
        mt={[20,'15vh']}
        mx='auto'
        border={['none', '1px']}
        borderColor={['' , 'gray.300']}
        borderRadius={10}
        >
    
        <VStack spacing={4} align='flex-start' w='full' color={'white'}>
            <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                <Heading>Login</Heading>
                <Text>Enter your e-mail and password to login</Text>
            </VStack>

            <FormControl>
                <FormLabel>E-mail Address</FormLabel>
                <Input rounded='md' variant='filled'/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded='md' variant='filled' type='password'/>
            </FormControl>
            <HStack w='full' justify={'space-between'}>
                <Checkbox>Remember me.</Checkbox>
                <Button variant='link' colorScheme='blue'>
                    Forgot Password?
                </Button>
        
            </HStack>
            <Button rounded='md' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
                Login
            </Button>
            <Link to="/daftar" >Register here..</Link>      
        </VStack>
        </Box>
    )
    
}

export default Login