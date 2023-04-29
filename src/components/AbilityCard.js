import { Card, CardBody, Text, CardHeader, Flex, Box, Heading, Stack, CardFooter } from '@chakra-ui/react';
import { GiBroadDagger } from 'react-icons/gi';
import React from 'react';
import propTypes from 'prop-types';


function AbilityCard(props) {
    return (        
        <Card  maxWidth="280px" minWidth="10px" position='relative'>
            {/* <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <TbCircleNumber1 size={30}/>
            </div> */}
            <CardHeader paddingBottom={1}>
                <Flex spacing='3'>
                    <Flex flex='1' gap='1' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Heading size='sm'>{props.title}</Heading>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody paddingTop={2} paddingBottom={1}>
                <Text variant="cardDescription">{props.description}</Text>
            </CardBody>
            <CardFooter justifyContent='right'>
                <Stack direction='row' spacing='1' alignItems='center'>
                    <GiBroadDagger /><Text>{props.class}</Text>
                </Stack>
            </CardFooter>
        </Card>
    );
}

export default AbilityCard
propTypes.AbilityCard = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    class: propTypes.string.isRequired
}

AbilityCard.defaultProps = {   
    title: 'Fancy Footwork',
    description: `You learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`,
    class: 'Swashbuckler'
}