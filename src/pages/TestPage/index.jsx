import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Menu, Search, Content, NewNote } from './styles'


import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';



export function TestPage() {
    return (
        <Container>


            <Header>

            </Header>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />

            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' },
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote>
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container >
    )
}