import styles from './SayMyName.module.css'

function SayMyName(props){

    return(
        <div  className={styles.center}>
            <p>Fala ai {props.nome}, tranquilo?</p>
        </div>
    )


}

export default SayMyName