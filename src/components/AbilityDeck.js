import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import AbilityCard from './AbilityCard';
import { Flex } from '@chakra-ui/react';

function AbilityDeck(props) {
    return (
        <Flex
            direction={{ base: "column", sm: "row" }}
            flexWrap="wrap"
            justify="space-around"
            align="stretch"
            w="100%"
            gap='0'
            rowGap='2%'
            overflowX="hidden"
            height='30%'
        >
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />
            <AbilityCard />

        </Flex>
    );
}

export default AbilityDeck