import { RiArrowLeftLine } from "react-icons/ri";

import { Container } from "./styles";

export function ArrowIcon({title, ...rest}) {
  return (
    <Container>
      <RiArrowLeftLine />
      <h2>{title}</h2>
    </Container>
  );
}
