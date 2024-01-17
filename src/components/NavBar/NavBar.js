import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Container>
                <div className={styles.navContent}>
                    <div className={styles.navIcon}>
                        <Link to="/" className={styles.navIcon}>
                            <span className="fa fa-tasks" />
                        </Link>
                    </div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <NavLink to="/" className={({ isActive }) => isActive ? styles.linkActive : styles.navItemLink}>Home</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/favorite" className={({ isActive }) => isActive ? styles.linkActive : styles.navItemLink}>Favorite</NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/about" className={({ isActive }) => isActive ? styles.linkActive : styles.navItemLink}>About</NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav >
    );
};

export default NavBar;