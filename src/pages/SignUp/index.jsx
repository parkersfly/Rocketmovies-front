import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Container, Form, Background } from './styles'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp(){
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="email" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha" icon={FiLock}/>

                <Button title="Cadastrar"/>

                <Link to="/">
                    <ButtonText title="Voltar para o login" icon={FiArrowLeft} />
                </Link>
            </Form>

            <Background />
        </Container>
    )
}