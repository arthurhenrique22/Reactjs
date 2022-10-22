import {Link} from 'react-router-dom'

import styles from './NavBar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/home2">Home2</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar