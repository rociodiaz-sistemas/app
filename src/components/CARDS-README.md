# CardContainer Component

The `CardContainer` component is designed to showcase a series of playing cards in a horizontally overlapped layout. The maximum number of cards shown is 40, and each card is slightly overlapped by the next one, creating a cascading effect.

## How It Works

The `CardContainer` component uses CSS positioning and the properties of the Flex and Box components from the Chakra UI library to create the layout.

### 1. Flex Component

The Flex component is a shorthand component that wraps the Box component with `display="flex"` applied. Flex is used to position the card container in the center of the page both vertically and horizontally. The width and height of the Flex container are set to 80% and 50% of the viewport width and height, respectively.

### 2. Box Component

The Box component is a basic content container component from Chakra UI. In this context, it is used to create a relatively positioned container for the cards.

The width of this Box is calculated based on the width of an individual card and the desired overlap between the cards:

```jsx
width={`${cardWidth + (cards.length - 1) * cardOverlap}px`}
```
Here, `cardWidth` is the width of a single card, and cardOverlap is the amount of overlap desired. The expression `cards.length - 1` 
is used because the first card doesn't need to be overlapped.

### 3. Cards and Positioning
Each card is wrapped in a Box component with `position="absolute"` applied. This allows each card to be positioned independently within the parent Box.

The `left` CSS property is used to create the overlap effect:
    
```jsx
left={`${index * cardOverlap}px`}
```
Each card is shifted to the right by an amount equal to its index times the cardOverlap value.

The `zIndex` property is used to ensure that each card appears on top of the one before it.

### 3. Key Concepts
1. **CSS Positioning**: CSS positioning is a fundamental concept in web development. It controls how and where elements are positioned in the layout. In this case, we used `position: "relative"` for the parent Box and `position: "absolute"` for the child Boxes (cards).

2. **Flexbox**:  Flexbox is a CSS layout module designed to help design flexible responsive layout structure without using float or positioning. In this project, it's used to center the card container.

3. **Chakra UI**: Chakra UI is a simple, modular, and accessible component library that provides building blocks to construct your React applications. We used Chakra UI's Box and Flex components in this project.

4. **Viewport units**: Viewport-percentage lengths are relative to the size of the initial containing block. We used viewport width (`vw`) and viewport height (`vh`) units to make the card container responsive.

5. **Array Mapping**: The `map()` function is used to render a list of components based on an array of data. In this case, it's used to create the card elements.
