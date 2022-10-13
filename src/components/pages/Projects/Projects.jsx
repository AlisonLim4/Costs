import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Message from "../../layout/Message/Message";
import Container from "../../layout/Container/Container";
import Loading from "../../layout/Loading/Loading";
import LinkButton from "../../layout/LinkButton/LinkButton";
import styles from "./Projects.module.css";
import ProjectCard from "../../project/ProjectCard";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveloading] = useState(false);
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
        setRemoveloading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>Não há projetos cadastrados</p>
        )}
      </Container>
    </div>
  );
};

export default Projects;
