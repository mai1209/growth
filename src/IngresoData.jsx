import style from "./style/Money.module.css";
import { useState, useEffect } from "react";

function IngresoData() {
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
 
 
  const obtenerMesTexto = (numeroMes) => {
    const meses = {
      "1": "Enero",
      "2": "Febrero",
      "3": "Marzo",
      "4": "Abril",
      "5": "Mayo",
      "6": "Junio",
      "7": "Julio",
      "8": "Agosto",
      "9": "Septiembre",
      "10": "Octubre",
      "11": "Noviembre",
      "12": "Diciembre",
    };
  
    return meses[numeroMes];
  };


  const eliminarItem = (index) => {
    const confirmarEliminar = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");
    if (confirmarEliminar) {
      const realIndex = dataList.length - 1 - index;
      const newDataList = [...dataList];
      newDataList.splice(realIndex, 1); // Elimina el elemento en el índice dado
      localStorage.setItem("formDataList", JSON.stringify(newDataList)); // Actualiza el almacenamiento local
      setDataList(newDataList); // Actualiza el estado
    }
  };

 
  return (
    <div  className={style.scrollContainer}>
      {dataList.slice().reverse().map((data, index) =>  (
        <div key={index} className={style.containerDescription}>
          <div className={style.containerDate}>
            <p className={style.day}>{obtenerFechaDividida(data.fecha).dia}  </p>
            <div className={style.yearDate}>
              <p className={style.year}>
              {obtenerFechaDividida(data.fecha).año}
              </p>
              <p className={style.mes}>
             {obtenerMesTexto(obtenerFechaDividida(data.fecha).mes)}
              </p>
            </div> 
          </div>
          <div className={style.detalle}>
            <div className={style.category}>
              {data.categoria || "categoria"}
            </div>
            <div className={style.Sur}>{data.detalle || "detalle"} </div>
          </div>
          <div className={data.check === true ? style.incom : style.egress}>
            $ {formatNumber(Number(data.añadirIngresoEgreso)) || 10000}
          </div>
          <button onClick={() => eliminarItem(index)} className={style.btnDelete} > <svg  className={style.btnDeleteIcon}   xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg></button>
        </div>
        
      ))}
    </div>
  );
}

export default IngresoData;
