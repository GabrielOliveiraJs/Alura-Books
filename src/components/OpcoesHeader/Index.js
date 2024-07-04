import styled from 'styled-components'

const Opcoes = styled.div`
    display: flex;
    align-items: center;
`

const Opcao = styled.ul`
   min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const OpcoesHeader = () => {
    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

    return (
        <Opcoes>
            {
                textoOpcoes.map((opcao) =>
                    <Opcao key={opcao}>
                        <p>{opcao}</p>
                    </Opcao>
                )
            }
        </Opcoes>
    )
}

export default OpcoesHeader