import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

export default function App() {
  return (
    <div>
      <Header text='Hello' isActive={true} />
      <Main isActive={true} />
      <Footer isActive={false}/>
    </div>
  );
}
