import { Link } from "react-router-dom";
import style from "./style/Add.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Categorie from "./Categories";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

import img from "./assets/LOGO TEXT.png";

function Add() {
  const initialFormData = {
    categoria: "",
    añadirIngresoEgreso: "",
    detalle: "",
    fecha: "",
    check: true,
    check2: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formDataList, setFormDataList] = useState([]);

  const [isIncomeSelected, setIsIncomeSelected] = useState(true);
  const [isExpenseSelected, setIsExpenseSelected] = useState(false);

//cambia el toggle de ingreso y egreso en seleccionado y no seleccionado
  const toggleIncome = () => {
    setIsIncomeSelected(true);
    setIsExpenseSelected(false);
    setFormData((prevState) => ({
      ...prevState,
      check: true,
      check2: false,
    }));
  };

  const toggleExpense = () => {
    setIsIncomeSelected(false);
    setIsExpenseSelected(true);
    setFormData((prevState) => ({
      ...prevState,
      check: false,
      check2: true,
    }));
  };

  //se guarda en el storage
  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setFormDataList(storedDataList);
  }, []);

  //maneja los estados del checkbox
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

  const getTodayDate = () => {
    const today = new Date();
    const options = { weekday: 'long' };
    return today.toLocaleDateString('es-ES', options);
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

  return (
    <>
      <img className={style.logo} src={img} alt="logo" />
      <div className={style.containerAdd}>
        <form onSubmit={handleSubmit} className={style.containerFormAdd}>
          <div className={style.containerNav}></div>
          <div className={style.Date}>
          <p> {getTodayDate()} </p>
            <p>{`${dia}/${mes}/${año}`}</p>
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
            <input className={style.inputAdd}
              name="check"
              type="checkbox"
              checked={formData.check}
              onChange={toggleIncome}
            />

            {isIncomeSelected && (
             <BsToggleOff size={116} className={style.icon} />
            )}

            {isExpenseSelected && (
              <BsToggleOn size={116} className={style.icon} /> 
            )}
            <p className={style.checkbox} onClick={toggleExpense}>
              Egreso
            </p>
            <input className={style.inputAdd}
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
