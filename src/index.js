import React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./app/App";
import { WHITE_GREY } from "./utils/colors";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }

  body {
    background-color: ${WHITE_GREY};
    margin: 0;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
