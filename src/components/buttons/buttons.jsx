import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { WHITE, DARK_BLUE, LIGHT_BLUE } from "../../utils/colors";

const PrimaryButton = styled(Button)`
  && {
    background-color: ${DARK_BLUE};
    border: 1px solid transparent;
    box-sizing: border-box;
    color: ${WHITE};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    height: 3rem;

    &: hover {
      background-color: ${WHITE};
      color: ${DARK_BLUE};
      border: 1px solid ${LIGHT_BLUE};
    }
  }
`;

const SecondaryButton = styled(Button)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    borderradius: 3;
    border: 0;
    color: ${WHITE};
    height: 48;
    padding: 0 2rem;
    boxshadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  }
`;

export { PrimaryButton, SecondaryButton };
