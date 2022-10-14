import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Company from "./components/pages/Company/Company";
import NewProject from "./components/pages/NewProject/NewProject";

import Container from "./components/layout/Container/Container";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Projects from "./components/pages/Projects/Projects";
import Project from "./components/pages/Project/Project";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
