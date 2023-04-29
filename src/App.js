import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AbilityCard from './components/AbilityCard';
import AbilityDeck from './components/AbilityDeck';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AbilityDeck />
    </ChakraProvider>
  );
}

export default App;
