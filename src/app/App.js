import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "../root/store";

import Dashboard from "../dashboard/dashboard-container";

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Dashboard />
    </AppContainer>
  </Provider>
);

export default App;
