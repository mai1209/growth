import Style from "./style/Secction.module.css";
import  { useState } from 'react';
function Secction() {
  const Time = ["Today ", " Daily ", " Monthly", "Calendary"];

 const [currentIndex, setCurrentIndex] = useState(0);
 const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Time.length - 1 : prevIndex - 1));
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Time.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className={Style.container}>
        <button className={Style.btn} onClick={handlePrevClick}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z"/></svg></button>
      
       
          <p  className={Style.containerTime}  key={currentIndex}>{Time[currentIndex]}</p>
      
    
      <button className={Style.btn}   onClick={handleNextClick}><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z"/></svg></button>
    </div>
  );
}

export default Secction;
