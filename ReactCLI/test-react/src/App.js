import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Having fun with React Components!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <a
            class="text-reset"
            className="Startup-link"
            href="https://startup.kaseycorner260.click"
            >Startup Link Component</a
          >
      </header>
    </div>
  );
}
function MyButton(){
  return (
  <button>I'm a button</button>);
}
export default App;
