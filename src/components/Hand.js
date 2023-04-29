import { Box } from '@chakra-ui/react';
import React from 'react';
import AbilityCard from './AbilityCard';

function Hand(props) {
    const cards = [{ title: 'Fancy Footwork', description: `You learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`, class: 'Swashbuckler' }, { title: 'Fancy Footwork', description: `You learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`, class: 'Swashbuckler' }, { title: 'Fancy Footwork', description: `You learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`, class: 'Swashbuckler' }, { title: 'Fancy Footwork', description: `You learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn.`, class: 'Swashbuckler' }]
    return (
        <Box display="flex" justifyContent="center">
            {cards.map((card, i) => (
                <>
                    <AbilityCard card={card} i={i} transform={`rotate(${(i - (cards.length - 2) / 3) * 10}deg)`} zIndex={cards.length - i}/>
                </>
            ))}
        </Box>
    );
}
export default Hand