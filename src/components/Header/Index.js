import styled from 'styled-components'
import IconesHeader from '../IconesHeader/Index'
import Logo from '../Logo/Index'
import OpcoesHeader from '../OpcoesHeader/Index'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header