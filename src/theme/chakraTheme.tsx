import { extendTheme } from "@chakra-ui/react";
import { 
    ButtonStyles as Button,
    InputStyles as Input,
 } from "../styles/chakraStyles";

const newTheme = extendTheme(
    {
        colors: {
            purpleA: "#845EC2",
            darkBlue: {
                100: "#6FBDFC",
                200: "#538DBD",
                300: "#375D7D",
                400: "#315470",
                500: "#274359",
            },
            darkPurple: {
                100: "#7674B4"
            }
        },

        components: {
            Button,
            Input,
        },
    }
)

export default newTheme;