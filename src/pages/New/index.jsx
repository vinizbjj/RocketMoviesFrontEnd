import { ArrowIcon } from "../../components/ArrowIcon";
import { NoteItem } from "../../components/NoteItem";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, TextArea } from "./styles";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { useState } from "react";


export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState()

  const [TagsMovies, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    await api.post("/notes", {
      title,
      description,
      rating,
      TagsMovies,
    });

    alert("Nota criada com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to={"/"}>
            <header>
              <ArrowIcon title={"Voltar"} />
            </header>
          </Link>
          <div>
            <Input
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota(de 0 a 5)"
              onChange={e => setRating(e.target.value)}

            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <span>Marcadores</span>

          <Section>
            {
              TagsMovies.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo Marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </Section>

          <div>
            <Button title="Excluir filme" />
            <Button
              title="Salvar"
              onClick={handleNewNote}
            />
          </div>
        </Form>
      </main>
    </Container>
  );
}
