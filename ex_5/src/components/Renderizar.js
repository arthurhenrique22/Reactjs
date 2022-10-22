import styles from './Renderizar.module.css'

import { useState, useEffect} from 'react';


function Renderizar(){
    const [count, setCount] = useState(0);

    useEffect(() =>{
      console.log("Roda a cada renderização")
    })
    useEffect(() => {
      console.log("Só roda ao incrementar valor")
    }, [count])
  
    return(
        <div className={styles.center}>
        <button onClick={() =>setCount((prevCount) => prevCount +1)}>
            Renderizar
        </button>
        <h2>{count}</h2>
      </div>
    )
}
export default Renderizar