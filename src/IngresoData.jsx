import style from "./style/Money.module.css";
import { useState, useEffect } from "react";

function IngresoData() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const storedDataList =
      JSON.parse(localStorage.getItem("formDataList")) || [];
    setDataList(storedDataList);
  }, []);

  return (
    <div>
      {dataList.map((data, index) => (
        <div key={index} className={style.containerDescription}>
          <div className={style.containerDate}>
            <p className={style.day}> {new Date(data.fecha).getDate()}</p>
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
            $ {data.añadirIngresoEgreso}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngresoData;
