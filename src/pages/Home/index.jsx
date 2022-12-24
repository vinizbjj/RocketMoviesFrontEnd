import { Container, NewNote, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { GrAdd } from "react-icons/gr";
import { Note } from "../../components/Note";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { RatingIcon } from "../../components/RatingIcon"

export function Home() {

  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState({})

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
      console.log(notes)
    }

    fetchNotes()
  }, [search])

  return (
    <Container>
      <Header>
        <Input placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>
      <Section title="Meus Filmes">
        <NewNote to={"/new"}>
          <GrAdd />
          <h3>Adicionar Filme</h3>
        </NewNote>
      </Section>

      <main>
        <Content to={"/details/1"}>
          {notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
              
            />
          ))
          }
        </Content>
      </main>
    </Container>
  );
}

