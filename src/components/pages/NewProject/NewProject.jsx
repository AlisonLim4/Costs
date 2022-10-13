import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "../../project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.service = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/projects", {
          state: { message: "projeto criado com sucesso!" },
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newProject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os seriços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
};

export default NewProject;
