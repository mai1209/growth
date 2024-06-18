import Select from "react-select";
import style from "./style/Add.module.css";
import PropTypes from "prop-types";

function Categorie({ onSelectCategory }) {
  //   const [selectedCategory, setSelectedCategory] = useState("");

  //  const handleCategoryChange = (e) => {
  //  const category = e.target.value;
  //setSelectedCategory(category);
  //onSelectCategory(category); // Llama a la función para manejar la selección en Add
  //};

  const options = [
    { value: "alimentos", label: "Alimentos" },
    { value: "transporte", label: "Transporte" },
    { value: "entretenimiento", label: "Entretenimiento" },
    { value: "Servicios Publicos", label: "Servicios Publicos" },
    { value: "Alquiler o hipoteca", label: "Alquiler o hipoteca" },
    { value: "Mantenimiento del hogar", label: "Mantenimiento del hogar" },
    { value: "Seguro de vivienda", label: "Seguro de vivienda" },
    { value: "Combustible", label: "Combustible" },
    { value: "Estacionamiento y peajes", label: "Estacionamiento y peajes" },
    { value: "Medicamentos", label: "Medicamentos" },
    { value: "Seguro médico", label: "Seguro médico" },
    { value: "Salud", label: "Salud" },
    { value: "Educación", label: "Educación" },
    { value: "Deudas y Finanzas", label: "Deudas y Finanzas" },
    { value: "Ropa y Accesorios", label: "Ropa y Accesorios" },
    { value: "Viajes y Vacaciones", label: "Viajes y Vacaciones" },
    { value: "Ahorros e Inversiones", label: "Ahorros e Inversiones" },
    { value: "Otro", label: "Otro" },
  ];

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
        color: "#FFFFFf"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#FFFFFf", // Cambia el color del texto del input
    }),
    option: (provided) => ({
      ...provided,

      backgroundColor: "rgba(7, 7, 7, 0.600)", 
  
      height: "100%",
      color: "#FFFFFf",
      textAlign: "center",
      "&:hover": {
        backgroundColor: "rgba(255, 52, 99, 0.74)", // Fondo más claro al pasar el ratón
      },
    }),
    menu: (provided) => ({
      ...provided,
      overflow: "auto",
      scrollbarWidth: "thin", // For Firefox
      padding:"20px",
      backgroundColor: "rgba(7, 7, 7, 0.600)",
   
      border: "1px solid #FF3465",
       borderRadius: "16px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "300px", // Adjust the max height to enable scrolling
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
      color: "#FFFFFf", // Cambia el color del placeholder aquí
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
        placeholder="Seleccionar una opción"
      ></Select>
    </div>
  );
}
Categorie.propTypes = {
  onSelectCategory: PropTypes.func,
};

export default Categorie;
