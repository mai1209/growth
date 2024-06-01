import style from "./style/Money.module.css";
import { useState, useEffect } from "react";


function IngresoData() {


  const [dataList, setDataList] = useState([]);
 

  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setDataList(storedDataList);


  }, []);

 

  const [fechaActual, setFechaActual] = useState("");

  useEffect(() => {
    // Función para obtener la fecha actual en formato "dd/mm/aaaa"
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0, así que sumamos 1
      const año = fecha.getFullYear();

      // Formatear la fecha como "dd/mm/aaaa"
      return (
        <div className={style.containerDate}>
          <p className={style.day}> {dia} </p>
          <div className={style.yearDate}>
            <p className={style.year}> horario </p>
            <p className={style.mes}>
              {" "}
              {mes} / {año}{" "}
            </p>
          </div>
        </div>
      );
    };

    // Obtener la fecha actual
    const fecha = obtenerFechaActual();
    // Actualizar el estado con la fecha actual
    setFechaActual(fecha);
  }, []);

  return (
    <div>
      {dataList.map((data, index) => (
        <div key={index} className={style.containerDescription}>
          <div>{data.fecha || fechaActual}</div>
          <div className={style.detalle}>
            <div className={style.category}>{data.categoria}</div>
            <div className={style.Sur}>{data.detalle || "detalle"} </div>
          </div>
          <div  className={data.check === true ? style.incom: style.egress} >
            $ {data.añadirIngresoEgreso}
          </div>

        </div>
      ))}

    </div>
  );
}



export default IngresoData;
