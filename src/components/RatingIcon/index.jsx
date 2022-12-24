import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function RatingIcon({ sizing }) {
    let stars = [];
    for (let cont = 1; cont <= 5; cont++) {
        if (cont <= sizing) {
            stars.push(<VscStarFull key={cont} />);
        } else {
            stars.push(<VscStarEmpty key={cont} />);
        }
    }

    return <Container>{stars}</Container>;
}
