import Select, { components } from "react-select";
import style from "./style/Add.module.css";
import PropTypes from "prop-types";
import {
  FaShoppingCart,
  FaGasPump,
  FaBus,
  FaWalking,
  FaBriefcaseMedical,
  FaHome,
  FaCar,
  FaSchool,
  FaChartPie,
  FaBalanceScale,
  FaShoppingBag,
} from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";
import { MdElectricalServices} from "react-icons/md";

function Categorie({ onSelectCategory }) {
  const options = [
    {
      value: "alimentos",
      label: "Alimentos",
      icon: <FaShoppingCart></FaShoppingCart>,
    },
    { value: "transporte", label: "Transporte", icon: <FaBus></FaBus> },
    { value: "entretenimiento", label: "Entretenimiento", icon: <FaWalking /> },
    {
      value: "Servicios Publicos",
      label: "Servicios Publicos",
      icon: <MdElectricalServices />,
    },
    {
      value: "Alquiler o hipoteca",
      label: "Alquiler o hipoteca",
      icon: <FaHome />,
    },
    {
      value: "Mantenimiento del hogar",
      label: "Mantenimiento del hogar",
      icon: <FaHome />,
    },
    {
      value: "Seguro de vivienda",
      label: "Seguro de vivienda",
      icon: <FaHome />,
    },
    {
      value: "Combustible",
      label: "Combustible",
      icon: <FaGasPump></FaGasPump>,
    },
    {
      value: "Estacionamiento y peajes",
      label: "Estacionamiento y peajes",
      icon: <FaCar />,
    },
    {
      value: "Medicamentos",
      label: "Medicamentos",
      icon: <FaBriefcaseMedical />,
    },
    {
      value: "Seguro médico",
      label: "Seguro médico",
      icon: <FaBriefcaseMedical />,
    },
    { value: "Salud", label: "Salud", icon: <FaBriefcaseMedical /> },
    { value: "Educación", label: "Educación", icon: <FaSchool /> },
    {
      value: "Deudas y Finanzas",
      label: "Deudas y Finanzas",
      icon: <FaChartPie />,
    },
    {
      value: "Ropa y Accesorios",
      label: "Ropa y Accesorios",
      icon: <FaShoppingBag />,
    },
    {
      value: "Viajes y Vacaciones",
      label: "Viajes y Vacaciones",
      icon: <IoAirplane />,
    },
    {
      value: "Ahorros e Inversiones",
      label: "Ahorros e Inversiones",
      icon: <FaBalanceScale />,
    },
    { value: "Otro", label: "Otro" },
  ];
  // mostrar los iconos en categorias
  const IconOption = (props) => {
    return (
      <components.Option {...props} className={style.divFa}>
        <div>{props.data.label}</div>
        <div>
          {props.data.icon && (
            <div className={style.iconFa}>{props.data.icon}</div>
          )}
        </div>
      </components.Option>
    );
  };

  // Mostrar los íconos en el valor seleccionado
  const SingleValue = (props) => (
    <components.SingleValue {...props} className={style.inputIconLabel}>
      <div>{props.data.label} </div>
      <div>
        {props.data.icon && (
          <span className={style.iconFa}>{props.data.icon}</span>
        )}
      </div>
    </components.SingleValue>
  );
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "none", // Cambia el color de fondo del input
      border: "1px solid #FF3465", // Cambia el borde del input
      borderRadius: "16px",
      boxShadow: "none",
      "&:hover": {
        borderColor: " #FF3465", // Cambia el color del borde al pasar el mouse sobre el input
      },
      textAlign: "center", // Centra el texto del input
      color: "#FFFFFf",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FFFFFf", // Cambia el color del texto del input
    
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "rgba(7, 7, 7,  0.863)",
      height: "100%",
      maxWidth: "600px",
      color: "#FFFFFf",
      padding: " 20px 50px 2px 50px ",
      "&:hover": {
        backgroundColor: "rgba(255, 52, 99, 0.74)", // Fondo más claro al pasar el ratón
      },
      display: "flex",
      justifyContent: "space-between",
      alingItems:"center",
      margin:"auto",

  

    }),

    menu: (provided) => ({
      ...provided,
      overflow: "auto",
      scrollbarWidth: "thin",
      backgroundColor: "rgba(7, 7, 7,  0.863)",
      border: "1px solid #FF3465",
      borderRadius: "16px",
      
    
     
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "300px",
      "&::-webkit-scrollbar": {
        width: "7px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#FFFFFf",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        background: "rgb(7, 7, 7)",
      },
    
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#FFFFFf", // Cambia el color del placeholder
      textAlign: "center",
      width: "100%",
    }),
  };

  const handleChange = (selectedOption) => {
    onSelectCategory(selectedOption.value);
  };
  return (
    <div className={style.containerCategory}>
      <Select
        name="dropdown"
        id="dropdown"
        options={options}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Escoja una categoría"
        components={{ Option: IconOption, SingleValue }}
      ></Select>
    </div>
  );
}
Categorie.propTypes = {
  onSelectCategory: PropTypes.func,
  data: PropTypes.shape({
    icon: PropTypes.element,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categorie;
