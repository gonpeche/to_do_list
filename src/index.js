import style from "./main.css";
import Main from './Main'
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));