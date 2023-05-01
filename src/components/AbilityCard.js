import { Card, CardBody, Text, CardHeader, Flex, Box, Heading, Stack, CardFooter } from '@chakra-ui/react';
import { GiBroadDagger } from 'react-icons/gi';
import React from 'react';
import propTypes from 'prop-types';


function AbilityCard({ card, ...rest }) {
    return (

        <Card
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            h="260px"
            w="160px"
            position="relative"
            opacity="1"
            transition="transform .5s ease, opacity .5s ease, scale .5s ease"
            _hover={{
                transform: "scale(1.7) rotate(0)",
                opacity: "1",
                zIndex: "9999",
            }}
            {...rest}
        >
            <CardHeader pt={2} pb={1} pr={2} pl={2} >
                <Flex spacing='3'>
                    <Flex flex='1' gap='1' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Heading size='xs'>{card.title}</Heading>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody pt={2} pb={1} pr={2} pl={2} textAlign='justify'>
                <Text variant="cardDescription">{card.description}</Text>
            </CardBody>
            <CardFooter pb={2}>
                <Stack direction='row' spacing='1' alignItems='center'>
                    <GiBroadDagger size={15} /><Text variant='classCardFooter'>{card.class}</Text>
                </Stack>
            </CardFooter>
        </Card>
    );
}

export default AbilityCard