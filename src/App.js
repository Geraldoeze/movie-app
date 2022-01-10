import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://www.omdbapi.com/?i=tt3896198&apikey=23038236')
  .then(res => res.data())
  .then(data => console.log(data))
  return (
    <div className="App">
    </div>
  );
}

export default App;
