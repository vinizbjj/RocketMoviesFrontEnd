import { ArrowIcon } from "../../components/ArrowIcon";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, TextArea } from "./styles";
import { Link } from "react-router-dom";

export function New() {
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
            <Input placeholder="Titulo" />
            <Input placeholder="Sua nota(de 0 a 5)" />
          </div>

          <TextArea placeholder="Observações" />

          <span>Marcadores</span>

          <Section>
            <NoteItem value={"React"} />
            <NoteItem isNew placeholder={"Novo Marcador"} />
          </Section>

          <div>
            <Button title="Excluir filme" />
            <Button title="Salvar" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
