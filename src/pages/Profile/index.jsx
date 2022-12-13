import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { ArrowIcon } from "../../components/ArrowIcon";
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  return (
    <Container>
      <header>
        <Link to={"/"}>
          <ArrowIcon />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/vinizbjj.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setOldPassword(e.target.value)} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={e => setNewPassword(e.target.value)} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
