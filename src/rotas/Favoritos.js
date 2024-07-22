import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa/Index';
import UltimosLancamentos from '../components/UltimosLancamentos/Index';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #002F52 35%, #326589 100%);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  )
}

export default Favoritos
