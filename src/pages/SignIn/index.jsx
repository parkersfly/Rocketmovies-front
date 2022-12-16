import { Container, Form, Background } from './styles';
import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Link } from 'react-router-dom'


export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-Mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />

        <Button title="Entrar"/>

        <Link to="/signup">Criar Conta</Link>
      </Form>


        <Background />
    </Container>
  );
}