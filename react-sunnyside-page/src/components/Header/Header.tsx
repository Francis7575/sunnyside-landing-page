import Logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { useState } from 'react'
import openMenu from '../../assets/icon-hamburger.svg'

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

    const handleToggleMenu = () => {
        const isOpen = !isMenuOpened;
        setIsMenuOpened(isOpen);
    };

    return (
            <header className={styles.header}>
                <div>
                    <img src={Logo} alt="Sunnyside logo" />
                </div>
                <div className={styles.navBarWrapper}>
                    <div className={styles.navBarRelative}>
                        <nav className={`${styles.navBar} ${isMenuOpened ? styles.showMenu : styles.hideMenu}`}>
                            <ul className={styles.ul}>
                                <li><a className={styles.aTag} href="#">About</a></li>
                                <li><a className={styles.aTag} href="#">Services</a></li>
                                <li><a className={styles.aTag} href="#">Projects</a></li>
                                <li className={styles.contactLi}>
                                    <a className={styles.contact} href="#">Contact</a>
                                </li>
                            </ul>
                            <div className={styles.triangle}></div>
                        </nav>
                    </div>
                </div>
                <button
                    className={`${styles.menuButton} ${styles.openMenu}`}
                    onClick={handleToggleMenu}>
                    <img src={openMenu} alt="Menu icon" />
                </button>
            </header>
    )
}

export default Header