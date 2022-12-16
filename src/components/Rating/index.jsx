import { Container } from './styles'
import starOn from '../../assets/starOn.svg'
import starOff from '../../assets/starOff.svg'

export function Rating(){
    return(
        <Container>
            <img src={starOn} alt="" />
            <img src={starOn} alt="" />
            <img src={starOn} alt="" />
            <img src={starOn} alt="" />
            <img src={starOff} alt="" />
        </Container>
    );
}