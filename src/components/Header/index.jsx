import { Container, Logo, Search, Profile } from './styles';
import { Input } from '../../components/Input'

export function Header(){
    return(
        <Container>
            <Logo>
               <h1>RocketMovies</h1>
            </Logo>
            <Search>
                <Input type="text" placeholder="Pesquisar pelo título"/>
            </Search>
            <Profile>
                <div>
                    <strong>Adrian Martins</strong>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/parkersfly.png" alt="" />
            </Profile>
        </Container>
    );
}