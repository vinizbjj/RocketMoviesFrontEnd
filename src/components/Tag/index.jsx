import { Container, Thissvg, Description } from "./styles";

export function Tag({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
export function Iconsvg({ title, ...rest }) {
  return <Thissvg {...rest}>{title}</Thissvg>;
}

export function Text({ title, children }) {
  return <Description>{children}</Description>;
}
