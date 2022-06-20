import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'base',
    },

    variants: {
        SolidBlue: {
            bg: 'darkBlue.200',
            color: 'black',
            fontFamily: "Comic Sans MS",
            _hover: {
                bg: "darkBlue.100"
            },
            fontWeight: 500
        }
    }
};

export const InputStyles: ComponentStyleConfig = {

    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'yellow',
        },

        SolidBlue: {
            field: {
                bg: "darkBlue.200",
                color: "black",
                fontWeight: 500,
                fontFamily: "Comic Sans MS",
                _placeholder: {
                    color: "black",
                    fontWeight: 500
                },
                _hover: {
                    bg: "darkBlue.100"
                }
            },
        }
    }
};