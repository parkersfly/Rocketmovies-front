import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'
import { FiPlus } from 'react-icons/fi'
import { Container, Content } from './styles'
import { Tag } from '../../components/Tag'

export function Details(){
    return(
        <Container>
            <Header />

            <section>
                <div>
                    <h2>Meus filmes</h2>
                    <Button title="Adicionar filme" icon={FiPlus}/>
                </div>
            </section>
           
            <main>
                <Content>

                <Note data={{ 
                    title: 'Interestellar', 
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade 
                    agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez 
                    anos de Cooper, acredita que seu quarto está assombrado por um fantasma`, 
                    tags: [
                        {id: "1", name: "Ficção Científica"}, 
                        {id: "2", name: "Drama"}, 
                        {id: "3", name: "Família"}
                        ]
                }} />

                <Note data={{ 
                    title: 'Interestellar', 
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade 
                    agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez 
                    anos de Cooper, acredita que seu quarto está assombrado por um fantasma`, 
                    tags: [
                        {id: "1", name: "Ficção Científica"}, 
                        {id: "2", name: "Drama"}, 
                        {id: "3", name: "Família"}
                        ]
                }} />

                <Note data={{ 
                    title: 'Interestellar', 
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade 
                    agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez 
                    anos de Cooper, acredita que seu quarto está assombrado por um fantasma`, 
                    tags: [
                        {id: "1", name: "Ficção Científica"}, 
                        {id: "2", name: "Drama"}, 
                        {id: "3", name: "Família"}
                        ]
                }} />

                <Note data={{ 
                    title: 'Interestellar', 
                    description: `Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade 
                    agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez 
                    anos de Cooper, acredita que seu quarto está assombrado por um fantasma`, 
                    tags: [
                        {id: "1", name: "Ficção Científica"}, 
                        {id: "2", name: "Drama"}, 
                        {id: "3", name: "Família"}
                        ]
                }} />
                </Content>
            </main>
        </Container>
    );
}