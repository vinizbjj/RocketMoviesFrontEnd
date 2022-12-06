import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { MyContext } from "../../hooks/auth";
import { useContext } from "react";

export function SignIn() {
  const data = useContext(MyContext);
  console.log(data);
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação par acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <Link to="/register">Criar Conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
