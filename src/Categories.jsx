import { useState } from "react";
import style from "./style/Add.module.css";
import PropTypes from "prop-types";


function Categorie({ onSelectCategory }) {
   // const [selectedOption, setSelectedOption] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category); // Llama a la función para manejar la selección en Add
  };

  return (
    <div>
    <select
      className={style.select}
      name="dropdown"
      id="dropdown"
      value={selectedCategory}
    onChange={handleCategoryChange}
    >
      <option  value="">Seleccionar una opcion</option>
      <option value="alimentos">Alimentos</option>
      <option value="transporte">Transporte</option>
      <option value="entretenimiento">Entretenimiento</option>
      <option value="facturas">Facturas</option>
    </select>

  </div>
  )
}
Categorie.propTypes = {
    onSelectCategory: PropTypes.func,
  };
 
export default Categorie