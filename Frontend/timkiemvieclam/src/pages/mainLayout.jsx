import { createContext, useEffect, useState } from "react";
import Header from "../componants/header";
import "./main.scss"
import axios from "axios";

export const AddressContext = createContext();
const MainLayout = ({ children }) => {
  
  return (
    <div className="App">
      <Header />
      <div>
      {children}
      </div>
    </div>
  );
};

export default MainLayout;
