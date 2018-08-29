import React from "react";
import styled from "styled-components";

import PrimaryButton from "../components/button/button";

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const App = () => (
  <AppContainer>
    <PrimaryButton>Search For Jokes</PrimaryButton>
  </AppContainer>
);

export default App;
