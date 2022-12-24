import { Container } from "./styles";
import { Tag, Text, Iconsvg } from "../Tag";
import { GrAdd } from "react-icons/gr";



export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.icons && (
        <div>
          {data.rating.map((icon) => (
            <Iconsvg key={icon.id} title={icon.name}></Iconsvg>
          ))}
        </div>
      )}
      <Text>{data.rating}</Text>

      <Text>{data.description}</Text>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
