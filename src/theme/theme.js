import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Text: {
          variants: {
            cardDescription: {
              fontSize: '0.75em'
            },
            // ...and so on
          },
        },
      },
});

export default theme;