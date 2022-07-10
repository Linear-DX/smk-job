import { Box, Heading, VStack, Text, HStack } from '@chakra-ui/layout'
import { InputGroup, InputLeftAddon, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'



const Daftar = () => {
    return (
        <Box 
        w={['full', 'md']}
        p={[8,10]}
        mt={[20,'10vh']}
        mx='auto'
        border={['none', '1px']}
        borderColor={['' , 'gray.300']}
        borderRadius={10}
        >
        
        <VStack spacing={4} align='flex-start' w='full' color={'white'}>
            <VStack spacing={1} align={['flex-start', 'center']} w='full'>
                <Heading>Create Account</Heading>
                <Text>Sign in to your account</Text>
            </VStack>

            <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input rounded='md' variant='filled'/>
            </FormControl>
            <InputGroup borderColor={'RGBA(255,255,255,0.08)'}>
                <InputLeftAddon bg={'RGBA(255,255,255,0.08)'} children='+62'  />
                <Input rounded='md' variant='filled' placeholder='Phone number'/>
            </InputGroup>
            <FormControl>
                <FormLabel>E-mail Address</FormLabel>
                <Input rounded='md' variant='filled'/>
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input rounded='md' variant='filled' type='password'/>
            </FormControl>
            <FormControl>
                <FormLabel>Repeat Your Password</FormLabel>
                <Input rounded='md' variant='filled' type='password'/>
            </FormControl>
            <HStack w='full' justify={'space-between'}>
                
                <Button variant='link' colorScheme='blue'>
                    Sign Up with Google Account
                </Button>
            </HStack>
            <Button rounded='md' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
                Sign Up
            </Button>
        </VStack>

        </Box>
    )
    
}

export default Daftar