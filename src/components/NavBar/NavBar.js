import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Container>
                <div className={styles.navContent}>
                    <div className={styles.navIcon}>
                        <a href="/" className={styles.navIcon}>
                            <span className="fa fa-tasks" />
                        </a>
                    </div>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="/" className={styles.navLink}>Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/favorite" className={styles.navLink}>Favorite</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="/about" className={styles.navLink}>About</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;