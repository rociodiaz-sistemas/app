import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    components: {
        Text: {
          variants: {
            cardDescription: {
              fontSize: '0.6em'
            },
            classCardFooter: {
                fontSize: '0.7em'
            }
            // ...and so on
          },
        },
      },
});

export default theme;