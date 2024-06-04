import style from "./style/Money.module.css";
import { useState, useEffect } from "react";

function IngresoData() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setDataList(storedDataList);
  }, []);

  const formatNumber = (number) => {
    return number.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\./g, 'x').replace(/,/g, '.').replace(/x/g, ',');
  };
        

  return (
    <div>
      {dataList.map((data, index) => (
        <div key={index} className={style.containerDescription}>
          <div className={style.containerDate}>
            <p className={style.day}> {new Date(data.fecha).getDate() +1}</p>
            <div className={style.yearDate}>
              <p className={style.year}>
                {" "}
                {new Date(data.fecha).toLocaleString("es-ES", { month: "long" })}{" "}
              </p>
              <p className={style.mes}> 
                {" "}
                {new Date(data.fecha).getFullYear()}{" "}
              </p>
            </div>
          </div>
          <div className={style.detalle}>
            <div className={style.category}>{data.categoria}</div>
            <div className={style.Sur}>{data.detalle || "detalle"} </div>
          </div>
          <div className={data.check === true ? style.incom : style.egress}>
          $ {formatNumber(data.añadirIngresoEgreso)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngresoData;
