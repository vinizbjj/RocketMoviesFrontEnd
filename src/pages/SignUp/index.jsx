import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()


  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuario cadastrado com sucesso!");
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possivel cadastrar");
        }
      });
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação par acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          icon={FiLock}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to={"/"}>
          <ArrowIcon title={"Voltar para o login"} />
        </Link>
      </Form>
    </Container>
  );
}
