import { Link } from "react-router-dom";
import style from "./style/Add.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Categorie from "./Categories";

import img from "./assets/LOGO TEXT.png";

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

  const [isIncomeSelected, setIsIncomeSelected] = useState(true);
  const [isExpenseSelected, setIsExpenseSelected] = useState(false);

  const toggleIncome = () => {
    setIsIncomeSelected(!isIncomeSelected);
    setIsExpenseSelected(false);
  };

  const toggleExpense = () => {
    setIsExpenseSelected(!isExpenseSelected);
    setIsIncomeSelected(false);
  };
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

  //fecha
  const fechaHoy = new Date();
  const año = fechaHoy.getFullYear();
  const mes = fechaHoy.getMonth() + 1;
  const dia = fechaHoy.getDate();

  if (formData.fecha === "") {
    setFormData((prevState) => ({
      ...prevState,
      fecha: `${dia}/${mes}/${año}`,
    }));
  }

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

  return (
    <>
      <img className={style.logo} src={img} alt="logo" />
      <div className={style.containerAdd}>
        <form onSubmit={handleSubmit} className={style.containerFormAdd}>
          <div className={style.containerNav}></div>
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
              className={style.numero}
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
              className={style.numero}
              name="fecha"
              type="text"
              placeholder={`${dia}/${mes}/${año}`}
              value={formData.fecha}
              onChange={handleChange}
            />
          </div>

          <div className={`${style.check} ${style.display}`}>
            <p className={style.checkbox} onClick={toggleIncome}>
              Ingreso
            </p>
            <input
  name="check"
  type="checkbox"
  checked={formData.check}
  onChange={toggleIncome}
/>
          
            {isIncomeSelected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="116px"
                viewBox="0 -960 960 960"
                width="116px"
                fill="#FF3465"
              >
                <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-60h400q75 0 127.5-52.5T860-480q0-75-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480q0 75 52.5 127.5T280-300Zm-1.06-79q42.06 0 71.56-29.44t29.5-71.5q0-42.06-29.44-71.56t-71.5-29.5q-42.06 0-71.56 29.44t-29.5 71.5q0 42.06 29.44 71.56t71.5 29.5ZM480-480Z" />
              </svg>
            )}

            {isExpenseSelected && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="116px"
                viewBox="0 -960 960 960"
                width="116px"
                fill="#FF3465"
              >
                <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-60h400q75 0 127.5-52.5T860-480q0-75-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480q0 75 52.5 127.5T280-300Zm400.94-79q42.06 0 71.56-29.44t29.5-71.5q0-42.06-29.44-71.56t-71.5-29.5q-42.06 0-71.56 29.44t-29.5 71.5q0 42.06 29.44 71.56t71.5 29.5ZM480-480Z" />
              </svg>
            )}
            <p className={style.checkbox} onClick={toggleExpense}>
              Egreso
            </p>
            <input
  name="check2"
  type="checkbox"
  checked={formData.check2}
  onChange={toggleExpense}
/>
          </div>
          {showError()}
          <div className={style.containerBtn}>
            <div className={style.Btn12}>
              <Link className={style.link} to="/">
                <div className={style.cancelar}>
                  <button type="button"> Cancelar</button>
                </div>
              </Link>
              <Link className={style.link} to="/" onClick={handleSubmit}>
                <div className={style.añadir}>
                  <button type="button"> Añadir</button>
                </div>
              </Link>
            </div>

            <button className={style.eliminar}>Eliminar</button>
          </div>
        </form>
      </div>
    </>
  );
}
Add.propTypes = {
  isChecked: PropTypes.bool,
  onCheckboxChange: PropTypes.bool,
  
};
export default Add;
