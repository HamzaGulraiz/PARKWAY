import React from "react";
import IntroLoginScreenContainer from "./src/components/IntroLoginScreenContainer";

import { RootSiblingParent } from "react-native-root-siblings";

function App() {
  return (
    <RootSiblingParent>
      <IntroLoginScreenContainer />
    </RootSiblingParent>
  );
}

export default App;
