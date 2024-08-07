import styled from "styled-components"
import { Titulo } from "../Titulo/Index"

const CardRecomenda = ({ titulo, subtitulo, descricao, img }) => {

    const Card = styled.div`
        align-items: center;
        background-color: #fff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        display: flex;
        margin: 10px auto;
        max-width: 600px;
        padding: 25px 20px;
        justify-content: space-around;
        width: 100%;
    `

    const Botao = styled.button`
        background-color: #EB9B00;
        color: #fff;
        padding: 10px 0;
        font-size: 16px;
        border: none;
        font-weight: 900;
        display: block;
        text-align: center;
        width: 150px;
        cursor: pointer;
    `

    const Descricao = styled.p`
        max-width: 300px;
    `

    const Subtitulo = styled.h4`
        color: #002f52;
        font-size: 18px;
        font-weight: bold;
        margin: 15px 0;
    `

    const ImgLivro = styled.img`
        width: 150px;
    `

    return (
        <Card>
            <div>
                <Titulo
                    tamanhoFonte="16px"
                    cor="#EB9B00"
                    alinhamento="left"
                >
                    {titulo}
                </Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img} alt={titulo} />
                <Botao>Saiba Mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda