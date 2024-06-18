import style from "./style/Money.module.css";
import { useState, useEffect } from "react";
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
import { MdElectricalServices } from "react-icons/md";

function IngresoData() {

  // Definir un objeto para mapear categorías a iconos
  const categoryIcons = {
    alimentos: <FaShoppingCart />,
    transporte: <FaBus />,
    entretenimiento: <FaWalking />,
    "Servicios Publicos": <MdElectricalServices />,
    "Alquiler o hipoteca": <FaHome />,
    "Mantenimiento del hogar": <FaHome />,
    "Seguro de vivienda": <FaHome />,
    Combustible: <FaGasPump />,
    "Estacionamiento y peajes": <FaCar />,
    Medicamentos: <FaBriefcaseMedical />,
    "Seguro médico": <FaBriefcaseMedical />,
    Salud: <FaBriefcaseMedical />,
    Educación: <FaSchool />,
    "Deudas y Finanzas": <FaChartPie />,
    "Ropa y Accesorios": <FaShoppingBag />,
    "Viajes y Vacaciones": <IoAirplane />,
    "Ahorros e Inversiones": <FaBalanceScale />,
    Otro: <FaBalanceScale />,
  };


  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setDataList(storedDataList);
  }, []);
  // funcion para determinar el formato de los numeros con coma y punto
  const formatNumber = (number) => {
    return number
      .toLocaleString("es", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(/\./g, "x")
      .replace(/,/g, ".")
      .replace(/x/g, ",");
  };

  const obtenerFechaDividida = (fecha) => {
    const partesFecha = fecha.split("/");
    return {
      dia: partesFecha[0],
      mes: partesFecha[1],
      año: partesFecha[2],
    };
  };

 // const categoryIcons = {
  //  alimentos: <FaShoppingCart />,
   // transporte: <FaBus />,
   // Combustible: <FaGasPump />,

    // Agrega más categorías e iconos según tu necesidad
  //};

  const eliminarItem = (index) => {
    const confirmarEliminar = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    );
    if (confirmarEliminar) {
      const realIndex = dataList.length - 1 - index;
      const newDataList = [...dataList];
      newDataList.splice(realIndex, 1); // Elimina el elemento en el índice dado
      localStorage.setItem("formDataList", JSON.stringify(newDataList)); // Actualiza el almacenamiento local
      setDataList(newDataList); // Actualiza el estado
    }
  };

  return (
    <div className={style.scrollContainer}>
      {dataList
        .slice()
        .reverse()
        .map((data, index) => (
          <div key={index} className={style.containerDescription}>
            <div className={style.containerDate}>
              <p className={style.day}>
                {obtenerFechaDividida(data.fecha).dia}{" "}
              </p>
              <div className={style.yearDate}>
                <p className={style.year}>horario</p>
                <p className={style.mes}>
                  {obtenerFechaDividida(data.fecha).mes}/
                  {obtenerFechaDividida(data.fecha).año}
                </p>
              </div>
            </div>
            <div className={style.detalle}>
              <div className={style.category}>

                <span className={style.categoryText}>
                  {data.categoria || "Categoría"}
                </span>
                {categoryIcons[data.categoria]  || (
                  <span className={style.defaultIcon}>Icono</span>
                )}
                
              </div>
              <div className={style.Sur}>{data.detalle || "detalle"} </div>
            </div>
            <div className={data.check === true ? style.incom : style.egress}>
              $ {formatNumber(Number(data.añadirIngresoEgreso)) || 10000}
            </div>
            <button
              onClick={() => eliminarItem(index)}
              className={style.btnDelete}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
              </svg>
            </button>
          </div>
        ))}
    </div>
  );
}

export default IngresoData;
