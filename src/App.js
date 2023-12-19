import './App.css';
import Home from './Components/Home';
// data import
import DataProvider from './Context/DataProvider';
function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
