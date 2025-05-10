import logo from "./logo.svg";
import "./App.scss";
import { MyComponents } from "./Example/MyComponents";
/*
functtttion component 
  const App = () => { 
  function App() {
classs component

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World! This is my first React app.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {<MyComponents />}

        {/* <MyComponents></MyComponents> */}
      </header>
    </div>
  );
}

export default App;
