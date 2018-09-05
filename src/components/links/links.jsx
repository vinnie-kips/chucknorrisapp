import styled from "styled-components";
import { Link } from "react-router-dom";
import { WHITE, DARK_BLUE, LIGHT_BLUE } from "../../utils/colors";

const LinkButton = styled(Link)`
  && {
    background-color: ${DARK_BLUE};
    border: 1px solid transparent;
    border-radius: 3px;
    color: ${WHITE};
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    padding: 1rem;
    text-align: center;
    text-decoration: none;

    &: active {
      background-color: ${DARK_BLUE};
      border: 1px solid ${LIGHT_BLUE};
      color: ${WHITE};
    }

    &: hover {
      background-color: ${WHITE};
      border: 1px solid ${LIGHT_BLUE};
      color: ${DARK_BLUE};
    }
  }
`;

export { LinkButton };
