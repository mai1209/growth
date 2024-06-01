import { Link } from "react-router-dom";

import style from "./style/Add.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";


function Add() {
 

 
const initialFormData = {
    añadirIngresoEgreso: "",
    categoria: "categoria",
    detalle: "",
    fecha: "",
    check:false,
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
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...formData };
    const newDataList = [...formDataList, newData];
    localStorage.setItem("formDataList", JSON.stringify(newDataList));

    // Resetear el formulario
    e.target.reset();
    setFormData(initialFormData); // Restablecer el estado del formulario
    setFormDataList(newDataList);
  };

  //para obtener la fecha del dia en formato año-mes-dia
  const [fechaActual, setFechaActual] = useState("");

  useEffect(() => {
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const dia = ("0" + fecha.getDate()).slice(-2);
      const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
      const ano = fecha.getFullYear();
      const fechaFormateada = `${ano}-${mes}-${dia}`;
      setFechaActual(fechaFormateada);
    };

    obtenerFechaActual();
  }, []);

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
            placeholder={fechaActual}
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
            Add Egress <input   name="check2"
              type="checkbox"
              checked={formData.check2} // Utilizamos el estado del checkbox del formulario
              onChange={handleChange}/>
          </label>
        </div>
        <div className={style.btn}>
          <button type="submit"> Add</button>
        </div>
  
      </form>
    </div>
  );
}
Add.propTypes = {
  isChecked: PropTypes.bool,
  onCheckboxChange: PropTypes.bool,
};
export default Add;
