import { Container } from "./styles";
import { Tag, Text, Iconsvg } from "../Tag";


export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.icons && (
        <div>
          {data.icons.map((icon) => (
            <Iconsvg key={icon.id} title={icon.name}></Iconsvg>
          ))}
        </div>
      )}
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
