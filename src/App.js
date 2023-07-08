
import Header from './components/Layout/Header';
import {Fragment} from 'react';
import Meals from './components/Meals/Meals';
import StoreProvider from './components/Store/StoreProvider'


function App() {
  return (
    <StoreProvider>
      <Header />
      <Meals></Meals>
    </StoreProvider>
  );
}

export default App;
