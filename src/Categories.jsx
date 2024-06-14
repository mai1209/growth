import { useState } from "react";
import style from "./style/Add.module.css";
import PropTypes from "prop-types";



function Categorie({ onSelectCategory }) {
 
    const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category); // Llama a la función para manejar la selección en Add
  };
  
  
  return (
    <div className={style.containerCategory} >
    <select
      className={style.select}
      name="dropdown"
      id="dropdown"
      value={selectedCategory  }
    onChange={handleCategoryChange}
    >
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF3465"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      <option  value="">Seleccionar una opcion</option>
      <option value="alimentos">Alimentos</option>
      <option value="transporte">Transporte</option>
      <option value="entretenimiento">Entretenimiento</option>
      <option value="Servicios Publicos">Servicios Publicos</option>
      <option value="Alquiler o hipoteca">Alquiler o hipoteca</option>
      <option value="Mantenimiento del hogar">Mantenimiento del hogar</option>
      <option value="Seguro de vivienda">Seguro de vivienda</option>
      <option value="Combustible">Combustible</option>
      <option value="Estacionamiento y peajes">Estacionamiento y peajes</option>
      <option value="Medicamentos">Medicamentos</option>
      <option value="Seguro médico">Seguro médico</option>
      <option value="Salud">Salud</option>
      <option value="Educación">Educación</option>
      <option value="Deudas y Finanzas">Deudas y Finanzas</option>
      <option value="Ropa y Accesorios">Ropa y Accesorios</option>
      <option value="Viajes y Vacaciones">Viajes y Vacaciones</option>
      <option value="Ahorros e Inversiones">Ahorros e Inversiones</option>
      <option value="Otro">Otro</option>
    </select>
   
  </div>
  )
}
Categorie.propTypes = {
    onSelectCategory: PropTypes.func,
  };
 
export default Categorie