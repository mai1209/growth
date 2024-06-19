import style from "./style/LogIn.module.css";
import { FcGoogle } from "react-icons/fc";
import { IoArrowBackOutline } from "react-icons/io5";
import { FiAtSign } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";
function LogIn() {
  return (
    <>
      <div className={style.btn}>
        <IoArrowBackOutline />
      </div>
      <div className={style.title}>Iniciar sesión</div>
      <p className={style.description}>
        ¡Inicia sesión ahora para llevar un registro de todos tus gastos e
        ingresos en un solo lugar!
      </p>
      <form action="submit" className={style.formContainer}>
        <div className={style.label}>
          <label htmlFor="email">Email</label>
          <div className={style.inputContainer}>
            <FiAtSign className={style.icon} />
            <input
              className={style.input}
              type="email"
              id="email"
              placeholder="Ex: abc@example.com"
            />
          </div>
        </div>
        <div className={style.label}>
          <label htmlFor="password">Contraseña</label>
          <div className={style.inputContainer}>
            <GiPadlock className={style.icon} />
            <input
              className={style.input}
              type="password"
              id="password"
              placeholder="ooooooooo"
            />
            
          </div> 
          <p className={style.forgotPassword}>¿Olvidaste tu contraseña?</p>
        </div>
       
        <div className={style.containerBtn}>
          <button className={style.BtnLogIn}>Iniciar sesión</button>
          <button className={style.BtnLogInGoogle}>
            <FcGoogle className={style.iconGoogle}></FcGoogle> Continuar con
            Google
          </button>
        </div>

        <p className={style.register}>
          ¿No tienes una cuenta? <span className={style.span}>Registrarse</span>{" "}
        </p>
      </form>
    </>
  );
}

export default LogIn;
