import { createContext, useEffect, useState } from "react";
import Header from "../componants/header";
import "./main.scss"
import axios from "axios";
import Footer from "../componants/footer";

export const AddressContext = createContext();
const MainLayout = ({ children }) => {
  
  return (
    <div className="App">
      <Header />
      <div>
      {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
