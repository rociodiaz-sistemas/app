import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import AbilityCard from './components/AbilityCard';
import Hand from './components/Hand';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div id="container-combat"></div>
      <Hand />
    </ChakraProvider>
  );
}

export default App;
