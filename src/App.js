import Header from "./Components/Layout/Header";
import React from "react";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
