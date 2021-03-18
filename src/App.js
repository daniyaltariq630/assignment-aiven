import React from "react";
import "./App.css";
import store from "./store";
import Provider from "react-redux/es/components/Provider";
import View from "./main/View";

function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default App;
