import React, { useEffect, useState } from "react";
import Input from "../form/Input/Input";
import Select from "../form/Select/Select";
import SubmitButton from "../form/SubmitButton/SubmitButton";
import styles from "./ProjectForm.module.css";
const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Orçamento do projeto "
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select
        name="category_id"
        text="selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ProjectForm;
