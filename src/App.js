import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Form from "./components/form";
import Server from "./components/server";
import "./App.css";
import NewForm from "./components/newForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/server" element={<Server />} />
          <Route path="/newform" element={<NewForm />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
