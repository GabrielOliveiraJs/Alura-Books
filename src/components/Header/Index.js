import styled from 'styled-components'
import IconesHeader from '../IconesHeader/Index'
import Logo from '../Logo/Index'
import OpcoesHeader from '../OpcoesHeader/Index'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header