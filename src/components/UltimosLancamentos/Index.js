import styled from "styled-components"
import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo/Index"
import CardRecomenda from "../CardRecomenda/Index"
import imagemLivro from "../../images/livro2.png"

const UltimosLancamentos = () => {

    const UltimosLancamentosContainer = styled.section`
        background-color: #EBECEE;
        padding-bottom: 20px;
        display: flex;
        flex-direction: column;
    `

    const NovosLivrosContainer = styled.div`
        margin-top: 30px;
        display: flex;
        width: 100%;
        justify-content: center;
        cursor: pointer;
    `

    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor='#EB9B00'
                tamanhoFonte='36px'
            >
                Últimos Lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}
            </NovosLivrosContainer>

            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo='Angular 11'
                descricao="Construa uma aplicação do zero usando essencialmente o que é Angular 11"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos