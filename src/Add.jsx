import { Link } from "react-router-dom";
import style from "./style/Add.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Categorie from "./Categories";

function Add() {
  const initialFormData = {
    categoria: "",
    añadirIngresoEgreso: "",
    detalle: "",
    fecha: "",
    check: false,
    check2: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setFormDataList(storedDataList);
  }, []);

  const handleChange = (e) => {
    //guardar el estado del checkbox
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  //guardar la categoria en el local storage
  const handleCategorySelection = (category) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      categoria: category,
    }));
    localStorage.setItem("selectedCategory", category); // Guardar en localStorage
  };

  const handleSubmit = () => {
    const newData = { ...formData };
    const newDataList = [...formDataList, newData];
    localStorage.setItem("formDataList", JSON.stringify(newDataList));

    setFormData(initialFormData); // Restablecer el estado del formulario
    setFormDataList(newDataList); //restablecer la lista de datos
  };

  //mostrar un error cuando se clickean los dos checkbox
  const showError = () => {
    if (formData.check && formData.check2 === true) {
      return (
        <div className="error-message">Only one checkbox can be selected</div>
      );
    } else {
      return "";
    }
  };

  //fecha
  const fechaHoy = new Date();
  const año = fechaHoy.getFullYear();
  const mes = fechaHoy.getMonth() + 1;
  const dia = fechaHoy.getDate();

  if (formData.fecha === "") {
    setFormData(prevState => ({
      ...prevState,
      fecha: `${dia}/${mes}/${año}`
    }));
  }

  return (
    <div className={style.containerAdd}>
      <form onSubmit={handleSubmit} className={style.containerFormAdd}>
        <Link to="/" className={style.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ff3465"
          >
            <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </Link>
        <div className={style.Date}>
          <p>Tuesday</p>
          <p>21/05/2024</p>
        </div>

        <div className={style.label}>
          <label htmlFor="añadirIngresoEgreso">
            Añadir Ingreso / Añadir Egreso
          </label>
          <input
            className={style.numero}
            name="añadirIngresoEgreso"
            type="text"
            placeholder="$ 0.00,00"
            value={formData.añadirIngresoEgreso}
            onChange={handleChange}
          />
        </div>
        <div className={style.label}>
          <label htmlFor="dropdown">Añadir Categoria:</label>

          <Categorie onSelectCategory={handleCategorySelection}></Categorie>
        </div>
        <div className={style.label}>
          <label htmlFor="detalle">Añadir Detalle</label>
          <input
            name="detalle"
            type="text"
            placeholder="Detalle"
            value={formData.detalle}
            onChange={handleChange}
          />
        </div>

        <div className={style.label}>
          <label htmlFor="fecha">Modificar Fecha </label>

          <input
            name="fecha"
            type="text"
            placeholder={`${dia}/${mes}/${año}`}
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>
        <div className={`${style.label} ${style.check}`}>
          <label className={style.checkbox}>
            Add Income
            <input
              name="check"
              type="checkbox"
              checked={formData.check} // Utilizamos el estado del checkbox del formulario
              onChange={handleChange}
            />
          </label>

          <label className={style.checkbox}>
            Add Egress{" "}
            <input
              name="check2"
              type="checkbox"
              checked={formData.check2} // Utilizamos el estado del checkbox del formulario
              onChange={handleChange}
            />
          </label>
        </div>
        {showError()}
        <Link className={style.link} to="/" onClick={handleSubmit}>
          <div className={style.btn}>
            <button type="button"> Add</button>
          </div>
        </Link>
      </form>
    </div>
  );
}
Add.propTypes = {
  isChecked: PropTypes.bool,
  onCheckboxChange: PropTypes.bool,
};
export default Add;
