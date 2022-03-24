import React from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";

const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
