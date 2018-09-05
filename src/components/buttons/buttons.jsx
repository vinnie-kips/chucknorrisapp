import styled from "styled-components";
import Button from "@material-ui/core/Button";

import {
  WHITE,
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_RED,
  LIGHT_ORANGE
} from "../../utils/colors";

const PrimaryButton = styled(Button)`
  && {
    background-color: ${DARK_BLUE};
    background-color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    border: 1px solid ${props => (props.inverted ? DARK_BLUE : "transparent")};
    box-sizing: border-box;
    color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    height: 3rem;

    &: hover {
      background-color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
      border: 1px solid ${LIGHT_BLUE};
      color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    }
  }
`;

const SecondaryButton = styled(Button)`
  && {
    background: linear-gradient(45deg, ${LIGHT_RED} 30%, ${LIGHT_ORANGE} 90%);
    color: ${WHITE};
  }
`;

export { PrimaryButton, SecondaryButton };
