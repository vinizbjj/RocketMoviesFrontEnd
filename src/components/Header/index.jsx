import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <Link to={"/"}>
          <h1>RocketMovies</h1>
        </Link>
        <Input placeholder="Pesquisar pelo título" />

        <div>
          <strong>Vinicius Oliveira</strong>
          <Link to={"/"}>
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
