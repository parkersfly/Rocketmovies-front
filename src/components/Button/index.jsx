import { Container } from './styles'

export function Button({ icon: Icon, title }){
    return(
        <Container>
            {Icon && <Icon size={16}/>}
            {title}
        </Container>
    );
}