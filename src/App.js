import styled from 'styled-components';
import Header from './components/Header/Index';
import Pesquisa from './components/Pesquisa/Index';
import UltimosLancamentos from './components/UltimosLancamentos/Index';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #002F52 35%, #326589 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
