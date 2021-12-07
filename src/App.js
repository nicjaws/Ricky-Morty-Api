
import './App.css';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <h1 className="text-center poppins my-4">Rick & Morty <span className="text-primary">Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
