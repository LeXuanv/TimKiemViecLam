import Header from "../componants/header";
import "./main.scss"


const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
