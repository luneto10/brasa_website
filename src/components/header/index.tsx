import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    const logo = require('../../assets/img/logo.png');
    const routes = [
        {
            label: 'Home',
            to: '/'
        },        
        {
            label: 'About',
            to: '/about'
        },
        {
            label: 'Gallery',
            to: '/galery'
        }

      ];
    return (
        <header className={styles.header}>
            <div className={styles.header__logo_name_container}>
                <div>
                    <img src={logo} alt="logo" className={styles.header__logo} />
                </div>
                <div className={styles.header__name}>
                    Brasa University of Nebraska - Lincoln
                </div>
            </div>
            <nav className={styles.header__nav}>
                <ul>
                    {routes.map((route, index) => (
                        <li key={index}>
                            <Link to={route.to}>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
