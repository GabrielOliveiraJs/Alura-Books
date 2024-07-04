import styled from "styled-components"
import Input from "../Input/Index"
import { useState } from "react"
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    min-height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const CardsContainer = styled.section`
    max-width: 100%;
    padding: 0 10px;
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`

const Card = styled.div`
    width: 250px;
    height: 350px;
    text-align: center;
    padding: 5px;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: 0.3s ease;

    & img {
        max-width: 100%;
    }

    &:hover {
        border: 1px solid #EB9B00;
    }
`

const Pesquisa = () => {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={e => {
                    const textoDigitado = e.target.value.trim()
                    const resultadoPesquisa = livros.filter(livro =>
                        livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
                    )
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <CardsContainer>
                {
                    livrosPesquisados.map(livro => (
                        <Card key={livro.id}>
                            <p>{livro.nome}</p>
                            <img src={livro.src} alt={livro.nome} />
                        </Card>
                    ))
                }
            </CardsContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa