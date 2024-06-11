
import style from "./style/Money.module.css";


function Money() {
 

  const myNumbers = JSON.parse(localStorage.getItem("formDataList")) || [];
  //para los ingresos
  const filteredValues = myNumbers.filter(num => num.check === true);
  const Ingresos = filteredValues.map(num => Number(num.añadirIngresoEgreso)); // Convertir a número
  const totalIngresos = Ingresos.reduce((total, ingreso) => total + ingreso, 0);
  
  //para los egresos 
  const filteredValuesEgress = myNumbers.filter(num => num.check === false);
  const Egresos= filteredValuesEgress.map(num => Number(num.añadirIngresoEgreso)); 
  const totalEgresos = Egresos.reduce((total, ingreso) => total + ingreso, 0);

//para convertir los miles con . y los decimales con , 


const formatNumber = (number) => {
    return number.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/\./g, 'x').replace(/,/g, '.').replace(/x/g, ',');
  };
                                                   

  return (
    <>
    
      
      <div className={style.containerTitles}>
        <p>Ingresos</p>
        <p>Egresos</p>
        <p>Total</p>
      </div>
      <div className={style.containerNumbers}>
      <p className={style.ingresos}>$ {formatNumber(totalIngresos)} </p>
        <p className={style.egresos}>$ {formatNumber(totalEgresos)} </p>
        <p className={style.total}> $ {formatNumber(totalIngresos + (-totalEgresos))}  </p>
      </div>
      <div>
  
    </div>

 

    </>
  );
}

export default Money;
