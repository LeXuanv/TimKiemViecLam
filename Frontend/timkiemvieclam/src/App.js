import "./App.scss";
import Layout from "./routers/layout";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://backend.test:8080";

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
