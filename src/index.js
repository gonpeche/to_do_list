import style from "./main.css";
import Main from './Main'
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));