import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Profile>
        <Link to={"/"}>
          <h1>RocketMovies</h1>
        </Link>
        <Input placeholder="Pesquisar pelo título" />

        <div>
          <strong>Vinicius Oliveira</strong>
          <Link onClick={signOut}>
            <span>sair</span>
          </Link>
        </div>
        <Link to={"/profile"}>
          <img src="https://github.com/vinizbjj.png" alt="Foto so usuario" />
        </Link>
      </Profile>
    </Container>
  );
}
