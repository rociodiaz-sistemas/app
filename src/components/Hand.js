import { Box, Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import AbilityCard from './AbilityCard';
const cards = [
    { title: 'Eldritch Blast', description: 'A beam of crackling energy streaks toward a creature within range.', class: 'Warlock' },
    { title: 'Fireball', description: 'A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame.', class: 'Wizard' },
    { title: 'Divine Smite', description: 'When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target.', class: 'Paladin' },
    { title: 'Wild Shape', description: 'You can use your action to magically assume the shape of a beast that you have seen before.', class: 'Druid' },
    { title: 'Cunning Action', description: 'Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat.', class: 'Rogue' },
    { title: 'Extra Attack', description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.', class: 'Fighter' },
    { title: 'Channel Divinity', description: 'You can channel divine energy directly from your deity, using that energy to fuel magical effects.', class: 'Cleric' },
    { title: 'Bardic Inspiration', description: 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you.', class: 'Bard' },
    { title: 'Lay on Hands', description: 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest.', class: 'Paladin' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },
    { title: 'Darkvision', description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light.', class: 'Warlock' },

];
const CardContainer = () => {
    const [cardWidth, setCardWidth] = useState(160);
    const [cardOverlap, setCardOverlap] = useState(40);
    let cardTotal = cards.length;

    const handleResize = () => {
        const cardContainerWidth = cardContainerRef.current.clientWidth;
        const newCardOverlap = Math.floor(cardContainerWidth / 6);
        const newCardWidth = Math.floor(
            (cardContainerWidth - newCardOverlap * (cards.length - 1)) / cards.length
        );
        setCardOverlap(newCardOverlap);
        setCardWidth(newCardWidth);
    };

    const cardContainerRef = useRef(null);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        // Use Flex to create a container that is centered and occupies 80% of the width and 50% of the height of the page
        <Flex justifyContent="center" alignItems="center" height="50vh" width="80vw" margin="auto">
            {/*Create a Box to hold the cards. The width of the Box is calculated based on the width of the cards and the desired overlap. This ensures that the Box is wide enough to hold all the cards*/}
            <Box position="relative" width={`${cardWidth + (cardTotal - 1) * cardOverlap}px`}>
                {cards.map((card, index) => (
                    // The Box for each card is absolutely positioned within the relative Box, creating the overlap effect
                    <Box
                        position="absolute" // this causes the cards to be positioned relative to the parent Box
                        right={`${index * cardOverlap}px`} // this shifts each card to the right based on its index, creating the overlap
                        zIndex={index} // this ensures that each card appears on top of the one before it
                        key={card}
                        _hover={{
                            zIndex: 1000, // this ensures that the hovered card appears on top of all other cards
                        }}
                        ref={cardContainerRef}
                    >
                        <AbilityCard card={card} />
                    </Box>
                ))}
            </Box>
        </Flex>
    );
};

export default CardContainer;