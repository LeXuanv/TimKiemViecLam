import "./App.scss";
import Layout from "./routers/layout";
import axios from 'axios';  

function App() {
  axios.defaults.baseURL = 'http://localhost:8000';

  return (
    
    <div className="App">
      <Layout />
    </div>
    
  );
}

export default App;
