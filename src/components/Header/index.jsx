import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { useAuth } from '../../hooks/auth'
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"



export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Profile>
        <Link to={"/"}>
          <h1>RocketMovies</h1>
        </Link>
        <Input placeholder="Pesquisar pelo título" />

        <div>
          <strong>{user.name}</strong>
          <Link onClick={signOut}>
            <span>sair</span>
          </Link>
        </div>
        <Link to={"/profile"}>
          <img src={avatarUrl} alt="Foto so usuario" />
        </Link>
      </Profile>
    </Container>
  );
}
