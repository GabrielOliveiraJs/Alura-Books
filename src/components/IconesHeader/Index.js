import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const IconesHeader = () => {
    const icones = [perfil, sacola]

    return (
        <Icones>
            {
                icones.map((icone) =>
                    <Icone key={icone}>
                        <img src={icone} alt='Ícone' />
                    </Icone>
                )
            }
        </Icones>
    )
}

export default IconesHeader