import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`
const LogoImage = styled.img`
        margin-right: 10px;
`

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="Logo" />
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo