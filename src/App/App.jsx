import React from "react";
import { Home } from "../Home/Home";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Routers } from "../router/Routers";

export const App = () => {
  return (
    <div className='wrapper'>
      <div id='container'>
        <Header />
        <Routers />
        <Footer />
      </div>
    </div>
  );
};
