import { ToastContainer } from "react-toastify";
import "./App.scss";
import Layout from "./routers/layout";
import axios from "axios";

function App() {
  // axios.defaults.baseURL = "http://backend.test:8080";
  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <div className="App">
      <ToastContainer />
      <Layout />
    </div>
  );
}

export default App;
