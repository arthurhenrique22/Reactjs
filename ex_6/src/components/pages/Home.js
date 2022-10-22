import styles from './Home.module.css'
import HelloWorld from '../HelloWorld';
import SayMyName from '../SayMyName'
import Renderizar from '../Renderizar';

function Home () {
    return (
        <div className={styles.center}>
            <h1>Bem-vindo a Home 1</h1>
            <h2>Arthur Henrique Alves Saturno</h2>       
            <HelloWorld />
            <SayMyName nome="Arthur"/>
            <Renderizar/>
        </div>
    );
}


export default Home