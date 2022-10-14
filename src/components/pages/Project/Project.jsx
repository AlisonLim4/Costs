import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Project.module.css";

function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
      });
  }, [id]);

  return <>{project.name}</>;
}

export default Project;
