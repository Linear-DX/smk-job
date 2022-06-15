import { ComponentStyleConfig, extendTheme } from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'base',
    },

    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'teal.500',
            color: 'white',
        },
        linear: {
            bg: 'red',
            color: 'yellow',
        }
    }
};

const theme = extendTheme(
    {
        components: {
            Button,
        },
    }
)

export default theme;