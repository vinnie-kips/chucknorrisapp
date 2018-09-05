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
      border: 1px solid ${LIGHT_BLUE};
      color: ${DARK_BLUE};
    }
  }
`;

const SecondaryButton = styled(Button)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    color: ${WHITE};
  }
`;

export { PrimaryButton, SecondaryButton };
